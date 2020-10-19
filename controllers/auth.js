const os = require("os");

const route = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { check, validationResult } = require("express-validator");
const passport = require("passport");

const User = require("../models/User");
const auth = require("../middlewares/is-auth");
const Seller = require("../models/Seller");
const Driver = require("../models/Driver");

const transporter = nodeMailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);
route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
route.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    try {
      req.session.isLoggedIn = true;
      req.session.user = req.user;
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.get("/api/current_user", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(404).send({});
    }
    const user = await User.findById(req.session.user._id);
    if (user) {
      req.session.user = user;
      const isLoggedIn = req.session.isLoggedIn;
      const Cpus = os.cpus().length;
      return res.send({ user, isLoggedIn, Cpus });
    }
    const driver = await Driver.findById(req.session.user._id);
    if (driver) {
      req.session.user = driver;
      const isLoggedIn = req.session.isLoggedIn;
      const Cpus = os.cpus().length;
      return res.send({ user: driver, isLoggedIn, Cpus });
    }
    const seller = await Seller.findById(req.session.user._id);
    req.session.user = seller;
    const isLoggedIn = req.session.isLoggedIn;
    const Cpus = os.cpus().length;
    return res.send({ user: seller, isLoggedIn, Cpus });
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post(
  "/api/login",
  check("email").trim().isEmail().withMessage("Please enter a valid email"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Your password must be a minimun of six characters"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        return res.status(404).send({ message: "No user with that email" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      if (!user.verified) {
        return res.status(401).send({ message: "Email not verified" });
      }
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.post(
  "/api/register",
  check("firstName")
    .trim()
    .isLength({ min: 3 })
    .withMessage(
      "Please enter your first name with a minimum of three characters"
    ),
  check("lastName")
    .trim()
    .isLength({ min: 3 })
    .withMessage(
      "Please enter your last name with a minimum of three characters"
    ),
  check("email").trim().isEmail().withMessage("Please enter a valid email"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Please enter a password with a minimum of six characters"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        phoneNumber
      } = req.body;
      if (password !== confirmPassword) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const userExists = await User.findOne({ email: email.toLowerCase() });
      if (userExists) {
        return res
          .status(401)
          .send({ message: "A user with that email already exists" });
      }
      // **TODO**  CHECK IF EMAIL IS VALID VIA SENDGRID
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber
      });
      const token = jwt.sign({ _id: user._id }, process.env.CONFIRM_EMAIL_JWT, {
        expiresIn: "1 hour"
      });
      await user.save();
      // **TODO** FROM EMAIL TO BE CHANGED
      transporter.sendMail(
        {
          to: email,
          from: "kevinkhalifa911@gmail.com",
          subject: "Email Confirmation",
          html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Way4Biz</title>
              <link rel="stylesheet" />
              <style>
                * {
                  padding: 0px;
                  margin: 0px;
                  box-sizing: border-box;
                }
                html,
                body {
                  overflow-x: hidden;
                }
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                }
          
                #content {
                  flex: 1 0 auto;
                }
          
                a {
                  text-decoration: none;
                }
          
                a:hover {
                  text-decoration: underline;
                }
          
                #mail-header {
                  background-color: #00001e;
                  height: 80px;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  justify-content: center;
                  color: #f76b1a;
                  border-bottom: 3px solid #f76b1a;
                }
          
                #mail-body {
                  width: 90%;
                  margin: auto;
                  text-align: center;
                  padding: 30px 0px;
                }
          
                .container {
                  width: 60%;
                  display: flex;
                  flex-direction: column;
                  margin: auto;
                  align-items: center;
                }
          
                .action-link {
                  background-color: #f76b1a;
                  color: #fff;
                  min-width: 150px;
                  padding: 10px;
                  border-radius: 4px;
                  width: 150px;
                  margin: 10px 0px;
                }
          
                #mail-footer {
                  padding: 20px 10px;
                  border-top: 1px solid #d4d4d4;
                  flex-shrink: 0;
                  color: #f76b1a;
                  display: flex;
                  width: 100%;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                }
          
                #mail-footer a {
                  color: #f76b1a;
                }
          
                @media screen and (max-width: 768px) {
                  .container {
                    width: 90%;
                  }
                }
              </style>
            </head>
            <body>
              <div id="content">
                <section id="mail-header">
                  <!-- mail subject here -->
                  <img
                    src="https://e-commerce-gig.s3.eu-west-2.amazonaws.com/5efd9987b53dfa39cc27bae9/logo.jpg"
                    height="100%"
                    alt="mail-logo"
                  />
                </section>
                <section id="mail-body">
                  <div class="container">
                    <!-- subject here -->
                    <h1>Email Confirmation</h1>
                    <!-- use this link to create other links -->
                    <p style="margin-top:10px">Please confirm your email by clicking the link below.</p>
                    <a href=${process.env.EMAIL_CONFIRM_REDIRECT}/${token} class="action-link">Confirm Email</a>
                    <!-- <p>Do something</p> -->
                  </div>
                </section>
              </body>
            </html>
          `
        },
        (error, info) => {
          if (error) {
            console.log(error);
          }
          console.log(info);
        }
      );
      res.status(201).send({
        message:
          "An email has been sent to your email address, please check it to confirm your account"
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.post(
  "/api/change/password",
  auth,
  check("currentPassword")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Please enter your current password"),
  check("newPassword")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Your new password must be atleast six characters"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { currentPassword, newPassword, confirmNewPassword } = req.body;
      let user;

      if (req.session.user.isSeller) {
        user = await Seller.findById(req.session.user._id);
      }
      if (req.session.user.IdNumber) {
        user = await Driver.findById(req.session.user._id);
      }
      if (!req.session.user.isSeller && !req.session.user.IdNumber) {
        user = await User.findById(req.session.user._id);
      }
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(401).send({
          message: "Your current password does not match with the provided one"
        });
      }
      if (newPassword !== confirmNewPassword) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      user.password = hashedPassword;
      await user.save();

      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

route.get("/api/confirm/email/:emailToken", async (req, res) => {
  try {
    const { emailToken } = req.params;
    const decoded = jwt.verify(emailToken, process.env.CONFIRM_EMAIL_JWT);
    if (!decoded._id) {
      return res.status(401).send({ message: "Invalid token" });
    }
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).send({ message: "No user with that email" });
    }
    user.verified = true;
    await user.save();
    res.redirect("/sign-in");
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/logout", auth, (req, res) => {
  try {
    req.session.destroy(err => {
      if (err) {
        return res.redirect("/");
      }
    });
    res.redirect("/sign-in");
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/reset", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user.password) {
      return res.status(404).send({ message: "No user with that email found" });
    }
    const seller = await Seller.findOne({ email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30 minutes"
      });
      // **TODO** from email address to be fixed
      transporter.sendMail(
        {
          to: email,
          from: "kevinkhalifa911@gmail.com",
          subject: "Password Resetting",
          html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Way4Biz</title>
              <link rel="stylesheet" />
              <style>
                * {
                  padding: 0px;
                  margin: 0px;
                  box-sizing: border-box;
                }
                html,
                body {
                  overflow-x: hidden;
                }
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                }
          
                #content {
                  flex: 1 0 auto;
                }
          
                a {
                  text-decoration: none;
                }
          
                a:hover {
                  text-decoration: underline;
                }
          
                #mail-header {
                  background-color: #00001e;
                  height: 80px;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  justify-content: center;
                  color: #f76b1a;
                  border-bottom: 3px solid #f76b1a;
                }
          
                #mail-body {
                  width: 90%;
                  margin: auto;
                  text-align: center;
                  padding: 30px 0px;
                }
          
                .container {
                  width: 60%;
                  display: flex;
                  flex-direction: column;
                  margin: auto;
                  align-items: center;
                }
          
                .action-link {
                  background-color: #f76b1a;
                  color: #fff;
                  min-width: 150px;
                  padding: 10px;
                  border-radius: 4px;
                  width: 150px;
                  margin: 10px 0px;
                }
          
                #mail-footer {
                  padding: 20px 10px;
                  border-top: 1px solid #d4d4d4;
                  flex-shrink: 0;
                  color: #f76b1a;
                  display: flex;
                  width: 100%;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                }
          
                #mail-footer a {
                  color: #f76b1a;
                }
          
                @media screen and (max-width: 768px) {
                  .container {
                    width: 90%;
                  }
                }
              </style>
            </head>
            <body>
              <div id="content">
                <section id="mail-header">
                  <!-- mail subject here -->
                  <img
                    src="https://e-commerce-gig.s3.eu-west-2.amazonaws.com/5efd9987b53dfa39cc27bae9/logo.jpg"
                    height="100%"
                    alt="mail-logo"
                  />
                </section>
                <section id="mail-body">
                  <div class="container">
                    <!-- subject here -->
                    <h1>Password Reset</h1>
                    <!-- use this link to create other links -->
                    <p style="margin-top:10px">Use the link below to reset your password.</p>
                    <a href=${process.env.RESET_REDIRECT}/${token} class="action-link">Reset Password</a>
                    <!-- <p>Do something</p> -->
                  </div>
                </section>
              </div>
              <section id="mail-footer">
                <div style="margin: 10px 0px">
                  <a href="http://google.com">Home</a> |
                  <a href="http://google.com">Support Center</a> |
                  <a href="http://google.com">FAQs</a>
                </div>
          
                <div class="copyright">
                  <p>
                    &copy;<span id="currentYear">2020</span>
                    <span style="margin-left: 5px">All Rights Reserved.</span>
                  </p>
                </div>
              </section>
              
            </body>
          </html>
          `
        },
        (error, info) => {
          if (error) console.log(error);
          console.log("Sending message info: ", info);
        }
      );
      return res.send({
        message:
          "Check your email inbox for instructions from us on how to reset your password."
      });
    }
    if (seller) {
      const token = jwt.sign({ _id: seller._id }, process.env.JWT_SECRET, {
        expiresIn: "30 minutes"
      });
      // **TODO** from email address to be fixed
      transporter.sendMail(
        {
          to: email,
          from: "kevinkhalifa911@gmail.com",
          subject: "Password Resetting",
          html: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Way4Biz</title>
              <link rel="stylesheet" />
              <style>
                * {
                  padding: 0px;
                  margin: 0px;
                  box-sizing: border-box;
                }
                html,
                body {
                  overflow-x: hidden;
                }
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                }
          
                #content {
                  flex: 1 0 auto;
                }
          
                a {
                  text-decoration: none;
                }
          
                a:hover {
                  text-decoration: underline;
                }
          
                #mail-header {
                  background-color: #00001e;
                  height: 80px;
                  display: flex;
                  align-items: center;
                  width: 100%;
                  justify-content: center;
                  color: #f76b1a;
                  border-bottom: 3px solid #f76b1a;
                }
          
                #mail-body {
                  width: 90%;
                  margin: auto;
                  text-align: center;
                  padding: 30px 0px;
                }
          
                .container {
                  width: 60%;
                  display: flex;
                  flex-direction: column;
                  margin: auto;
                  align-items: center;
                }
          
                .action-link {
                  background-color: #f76b1a;
                  color: #fff;
                  min-width: 150px;
                  padding: 10px;
                  border-radius: 4px;
                  width: 150px;
                  margin: 10px 0px;
                }
          
                #mail-footer {
                  padding: 20px 10px;
                  border-top: 1px solid #d4d4d4;
                  flex-shrink: 0;
                  color: #f76b1a;
                  display: flex;
                  width: 100%;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                }
          
                #mail-footer a {
                  color: #f76b1a;
                }
          
                @media screen and (max-width: 768px) {
                  .container {
                    width: 90%;
                  }
                }
              </style>
            </head>
            <body>
              <div id="content">
                <section id="mail-header">
                  <!-- mail subject here -->
                  <img
                    src="https://e-commerce-gig.s3.eu-west-2.amazonaws.com/5efd9987b53dfa39cc27bae9/logo.jpg"
                    height="100%"
                    alt="mail-logo"
                  />
                </section>
                <section id="mail-body">
                  <div class="container">
                    <!-- subject here -->
                    <h1>Password Reset</h1>
                    <!-- use this link to create other links -->
                    <p style="margin-top:10px">Use the link below to reset your password.</p>
                    <a href=${process.env.RESET_REDIRECT}/${token} class="action-link">Reset Password</a>
                    <!-- <p>Do something</p> -->
                  </div>
                </section>
              </div>
              <section id="mail-footer">
                <div style="margin: 10px 0px">
                  <a href="http://google.com">Home</a> |
                  <a href="http://google.com">Support Center</a> |
                  <a href="http://google.com">FAQs</a>
                </div>
          
                <div class="copyright">
                  <p>
                    &copy;<span id="currentYear">2020</span>
                    <span style="margin-left: 5px">All Rights Reserved.</span>
                  </p>
                </div>
              </section>
            </body>
          </html>
          `
        },
        (error, info) => {
          if (error) console.log(error);
          console.log("Sending message info: ", info);
        }
      );
      return res.send({
        message:
          "Check your email inbox for instructions from us on how to reset your password."
      });
    }
    return res.status(401).send({ message: "No user with that email found" });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/reset/:resetToken", async (req, res) => {
  try {
    const { resetToken } = req.params;
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    if (!decoded._id) {
      return res.status(401).send({ message: "Invalid Token" });
    }
    const user = await User.findById(decoded._id);
    const seller = await Seller.findById(decoded._id);
    if (user) {
      req.session.resetToken = resetToken;
      return res.redirect("/password/reset/callback");
    }
    if (seller) {
      req.session.resetToken = resetToken;
      return res.redirect("/password/reset/callback");
    }
    return res.status(401).send({ message: "No user found" });
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/password/reset/callback", (req, res) => {
  try {
    if (req.session.resetToken) {
      return res.send(req.session.resetToken);
    }
    res.send({});
  } catch (error) {
    res.status(500).send(error);
  }
});

// CHECK FOR PASSWORD LENGTH
route.post("/api/reset/:resetToken", async (req, res) => {
  try {
    const { resetToken } = req.params;
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    if (!decoded._id) {
      return res.status(401).send({ message: "Invalid Token" });
    }
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.findById(decoded._id);
    const seller = await Seller.findById(decoded._id);
    if (user) {
      user.password = hashedPassword;
      await user.save();
      return res.send({ user, message: "Password updated successfully" });
    }
    if (seller) {
      seller.password = hashedPassword;
      await seller.save();
      return res.send({
        user: seller,
        message: "Password updated successfully"
      });
    }
    return res.status(404).send({ message: "No user found" });
  } catch (error) {
    res.status(500).send(error);
  }
});
route.patch("/api/user/edit", auth, async (req, res) => {
  try {
    const { firstName, lastName, address, city, town, phoneNumber } = req.body;
    const user = await User.findById(req.session.user._id);
    const seller = await Seller.findById(req.session.user._id);
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.address = address;
      user.city = city;
      user.town = town;
      user.phoneNumber = phoneNumber;
      await user.save();
      const isLoggedIn = req.session.isLoggedIn;
      return res.send({ user, isLoggedIn });
    }
    if (seller) {
      seller.firstName = firstName;
      seller.lastName = lastName;
      seller.address = address;
      seller.city = city;
      seller.town = town;
      seller.phoneNumber = phoneNumber;
      await seller.save();
      const isLoggedIn = req.session.isLoggedIn;
      return res.send({ user: seller, isLoggedIn });
    }

    res.status(401).send({ message: "User not found" });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.patch("/api/loggedIn/reset/password", auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.session.user._id);
    const seller = await Seller.findById(req.session.user._id);
    if (user) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const hashedPassowrd = await bcrypt.hash(newPassword, 12);
      user.password = hashedPassowrd;
      await user.save();
      return res.send({ message: "Password updated successfully" });
    }
    if (seller) {
      const isMatch = await bcrypt.compare(currentPassword, seller.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const hashedPassowrd = await bcrypt.hash(newPassword, 12);
      seller.password = hashedPassowrd;
      await seller.save();
      return res.send({ message: "Password updated successfully" });
    }
    res.status(404).send({ message: "No user with that ID found" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
