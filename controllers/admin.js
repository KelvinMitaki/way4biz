const nodeMailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const route = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const Product = require("../models/Product");
const isSeller = require("../middlewares/is-seller");
const Seller = require("../models/Seller");
const User = require("../models/User");

const transporter = nodeMailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

route.post(
  "/api/seller/register",
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
  check("description")
    .trim()
    .isLength({ min: 20 })
    .withMessage("Please enter a description with a minimum of 20 characters"),
  check("storeName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please enter a store name with 3 or more characters"),
  check("phoneNumber")
    .isNumeric()
    .withMessage("Please enter a valid phone number"),
  check("city").trim().not().isEmpty().withMessage("Please enter a valid city"),
  check("address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid street address"),
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
        phoneNumber,
        description,
        storeName,
        city,
        address
      } = req.body;
      if (password !== confirmPassword) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const userExists = await User.findOne({ email: email.toLowerCase() });
      if (userExists) {
        return res
          .status(401)
          .send({ email: "A user with that email already exists" });
      }
      const sellerExists = await Seller.findOne({ email: email.toLowerCase() });
      if (sellerExists) {
        return res
          .status(401)
          .send({ email: "A seller with that email already exists" });
      }
      // **TODO**  CHECK IF EMAIL IS VALID VIA SENDGRID
      const hashedPassword = await bcrypt.hash(password, 12);
      const seller = new Seller({
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        description,
        storeName: storeName.toLowerCase(),
        city,
        address
      });
      const token = jwt.sign(
        { _id: seller._id },
        process.env.CONFIRM_EMAIL_JWT,
        {
          expiresIn: "1 hour"
        }
      );
      await seller.save();
      // **TODO** FROM EMAIL TO BE CHANGED
      transporter.sendMail(
        {
          to: email,
          from: "kevinkhalifa911@gmail.com",
          subject: "Email Confirmation",
          html: `<html lang="en">
      <body>
          <h5 style="font-family: Arial, Helvetica, sans-serif;">Confirming Your Email</h5>
          <p style="font-family: Arial, Helvetica, sans-serif;">Please Click
              <a href=${process.env.EMAIL_CONFIRM_REDIRECT}/${token}/seller>here</a> to confirm your email
          </p>
      </body>
      </html>`
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

route.get("/api/confirm/email/:emailToken/seller", async (req, res) => {
  try {
    const { emailToken } = req.params;
    const decoded = jwt.verify(emailToken, process.env.CONFIRM_EMAIL_JWT);
    if (!decoded._id) {
      return res.status(401).send({ message: "Invalid token" });
    }
    const seller = await Seller.findById(decoded._id);
    if (!seller) {
      return res.status(401).send({ message: "No seller with that email" });
    }
    seller.verified = true;
    await seller.save();
    req.session.seller = seller;
    res.redirect("/confirm/phoneNumber");
  } catch (error) {
    res.status(500).send(error);
  }
});
// CONFIRM PHONE NUMBER
route.post("/api/twilio", async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    await client.verify.services(process.env.TWILIO_SID).verifications.create({
      to: `+254${phoneNumber}`,
      channel: "sms"
    });
    req.session.phoneNumber = phoneNumber;
    res.redirect("/api/number/verify");
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/number/verify", (req, res) => {
  try {
    if (req.session.phoneNumber) {
      return res.send(req.session.phoneNumber);
    }
    res.send({});
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/twilio/verify", async (req, res) => {
  try {
    const { phoneNumber, code } = req.body;
    if (!req.session.seller) {
      return res.redirect("/seller/register");
    }
    const data = await client.verify
      .services(process.env.TWILIO_SID)
      .verificationChecks.create({
        to: `+254${phoneNumber}`,
        code
      });
    if (!data.valid) {
      return res.status(401).send({
        message:
          "The Verification code you entered is invalid. Please try again"
      });
    }
    const seller = await Seller.findById(req.session.seller._id);
    if (!seller) {
      return res.redirect("/seller/redirect");
    }
    seller.verifiedPhoneNumber = true;
    await seller.save();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/current_seller", (req, res) => {
  try {
    if (req.session.seller) {
      return res.send(req.session.seller);
    }
    res.send({});
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post(
  "/api/seller/login",
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
      const seller = await Seller.findOne({ email });
      if (!seller) {
        return res.status(404).send({ message: "No seller with that email" });
      }
      const isMatch = await bcrypt.compare(password, seller.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      if (!seller.verifiedPhoneNumber) {
        return res.status(401).send({ message: "Phone number not verified" });
      }

      req.session.user = seller;
      req.session.isLoggedIn = true;
      res.send(seller);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.get("/api/products/seller/:sellerId", isSeller, async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ seller: sellerId });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post(
  "/api/product/:sellerId",
  check("name").trim().not().isEmpty().withMessage("Please enter a valid name"),
  check("price").isFloat().withMessage("please enter a valid price"),
  check("stockQuantity")
    .isNumeric()
    .withMessage("please enter a valid stock quantity"),
  check("subcategory")
    .trim()
    .not()
    .isEmpty()
    .withMessage("please enter a valid sub category"),
  check("description")
    .trim()
    .isLength({ min: 20 })
    .withMessage(
      "Please enter a valid description with a minimum of 20 characters"
    ),
  check("category")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid category"),
  check("imageUrl")
    .trim()
    .isURL()
    .withMessage("please enter a valid image url"),
  isSeller,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send({ message: errors.array()[0].msg });
    }
    try {
      const { sellerId } = req.params;
      const {
        name,
        price,
        stockQuantity,
        subcategory,
        description,
        category,
        imageUrl
      } = req.body;
      const product = new Product({
        name,
        price,
        stockQuantity,
        category,
        subcategory,
        seller: sellerId,
        description,
        imageUrl
      });
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.patch("/api/product/:sellerId/:productId", isSeller, async (req, res) => {
  try {
    const { productId, sellerId } = req.params;
    const { name, price, stockQuantity } = req.body;
    const product = await Product.findOne({
      _id: productId,
      seller: sellerId
    });
    if (name) {
      product.name = name;
    }
    if (price) {
      product.price = price;
    }
    if (stockQuantity) {
      product.stockQuantity = stockQuantity;
    }
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.delete(
  "/api/product/:sellerId/:productId",
  isSeller,
  async (req, res) => {
    try {
      const { productId, sellerId } = req.params;
      await Product.findOneAndDelete({ _id: productId, seller: sellerId });
      res.send({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = route;
