const route = require("express").Router();
const { check, validationResult } = require("express-validator");

const Product = require("../models/Product");
const auth = require("../middlewares/is-auth");
const Order = require("../models/Order");
const delivery = require("../middlewares/delivery");

route.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/api/products/search", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const product = await Product.find({
      name: { $regex: searchTerm, $options: "i" }
    });
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.session.user._id });
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/checkout", auth, (req, res) => {
  try {
    const { firstName, lastName, number } = req.session.user;
    if (!number) {
      return res.send({ firstName, lastName });
    }
    res.send({ firstName, lastName, number });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post(
  "/api/checkout",
  auth,
  check("firstName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please enter your name with a minimum of three characters"),
  check("lastName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please enter your name with a minimum of three characters"),
  check("number")
    .isNumeric()
    .isLength({ min: 12 })
    .withMessage("Invalid Number"),
  check("deliveryAddress")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Please enter a valid delivery address"),
  check("city").trim().isLength({ min: 2 }).withMessage("Choose a valid city"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send(errors.array()[0].msg);
      }
      const {
        firstName,
        lastName,
        number,
        deliveryAddress,
        region,
        city
      } = req.body;
      // CALCULATE DISTANCE AND DISTANCE CHARGES BASED ON REGION/CITY AND INCLUDE IT IN THE REQ.DELIVERY
      req.delivery = {
        firstName,
        lastName,
        number,
        deliveryAddress,
        region,
        city
      };
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.post(
  "/api/checkout/payment",
  auth,
  delivery,
  check("paymentMethod")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Please check your payment method"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send(errors.array()[0].msg);
      }
      const {
        firstName,
        lastName,
        number,
        deliveryAddress,
        region,
        city
      } = req.delivery;
      const { paymentMethod } = req.body;
      const order = new Order({
        firstName,
        lastName,
        number,
        deliveryAddress,
        region,
        city,
        paymentMethod
      });
      await order.save();
      res.status(201).send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = route;
