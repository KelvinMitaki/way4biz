const { check, validationResult } = require("express-validator");
const Driver = require("../models/Driver");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/api/driver/register",
  check("email").trim().isEmail().withMessage("Please enter a valid email"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
  check("firstName")
    .trim()
    .notEmpty()
    .withMessage("Please provide a valid first name"),
  check("lastName")
    .trim()
    .notEmpty()
    .withMessage("please provide a valid last name"),
  check("confirmPassword").trim().notEmpty(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const {
        password,
        confirmPassword,
        email,
        firstName,
        lastName
      } = req.body;
      if (password.trim() !== confirmPassword.trim()) {
        return res.status(401).send({ message: "passwords do not match" });
      }
      const driverExists = await Driver.findOne({ email });
      if (driverExists) {
        return res
          .status(401)
          .send({ message: "a driver with that email already exists" });
      }
      const hashedPass = await bcrypt.hash(password, 12);
      const driver = new Driver({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashedPass
      });
      const token = jwt.sign(
        { _id: driver._id },
        process.env.CONFIRM_EMAIL_JWT,
        {
          expiresIn: "1 hour"
        }
      );
      await driver.save();
      transporter.sendMail(
        {
          to: email,
          from: "kevinkhalifa911@gmail.com",
          subject: "Email Confirmation",
          html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Way4Biz</title>
              <style>
                * {
                  padding: 0px;
                  margin: 0px;
                  box-sizing: border-box;
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
                #mail-header {
                  background-color: #00001e;
                  height: 80px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #f76b1a;
                }
          
                #mail-body {
                  width: 90%;
                  margin: auto;
                  text-align: center;
                  padding: 30px 0px;
                }
          
                #mail-footer {
                  height: 100px;
                  background-color: #00001e;
                  flex-shrink: 0;
                }
              </style>
            </head>
            <body>
              <div id="content">
                <section id="mail-header">
                  <!-- mail subject here -->
                  <h1>Confirm Your Email</h1>
                </section>
                <section id="mail-body">
                  <!-- mail content here -->
                  <p>Please Click
                  <a href=${process.env.DRIVER_CONFIRM_REDIRECT}/${token}>here</a> to confirm your email.</p>
                </section>
              </div>
              <section id="mail-footer"></section>
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

router.get("/api/confirm/driver/:driverToken", async (req, res) => {
  try {
    const { driverToken } = req.params;
    const decoded = jwt.verify(driverToken, process.env.CONFIRM_EMAIL_JWT);
    if (!decoded._id) {
      return res.status(401).send({ message: "Invalid token" });
    }

    const driver = await Driver.findById(decoded._id);
    if (!driver) {
      return res.status(401).send({ message: "No driver with that email" });
    }
    driver.verified = true;
    await driver.save();
    res.redirect("/driver/sign-in");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post(
  "/api/driver/login",
  check("email").trim().isEmail().withMessage("please enter a valid email"),
  check("password").trim().withMessage("password cannot be empty"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { email, password } = req.body;
      const driver = await Driver.findOne({ email: email.toLowerCase() });
      if (!driver) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      const isMatch = await bcrypt.compare(password, driver.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      req.session.driver = driver;
      req.session.isLoggedIn = true;
      res.send(driver);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = router;
