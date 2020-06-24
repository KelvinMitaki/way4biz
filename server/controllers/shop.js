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
route.get("/api/products/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    if (!products || products.length === 0) {
      return res.status(404).send({ message: "No products in that category" });
    }
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/products/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const { min, max, sortBy } = req.body;
    // **TODO** RATING FREE SHIPPING SORT BY
    if (min && !max) {
      const products = await Product.find({
        category,
        price: { $gte: min }
      }).sort(sortBy);
      return res.send(products);
    }
    if (max && !min) {
      const products = await Product.find({
        category,
        price: { $lte: max }
      }).sort(sortBy);
      return res.send(products);
    }
    if (min && max) {
      const products = await Product.find({
        category,
        price: { $gte: min, $lte: max }
      }).sort(sortBy);
      return res.send(products);
    }
    const products = await Product.find({ category }).sort(sortBy);
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/products/:subcategory", async (req, res) => {
  try {
    const { subcategory } = req.params;
    const products = await Product.find({ subcategory });
    if (!products || products.length === 0) {
      return res
        .status(404)
        .send({ message: "No products in that subcategory" });
    }
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/products/:subcategory", async (req, res) => {
  try {
    const { subcategory } = req.params;
    const { min, max, sortBy } = req.body;
    // **TODO** RATING FREE SHIPPING SORT BY
    if (min) {
      const products = await Product.find({
        subcategory,
        price: { $gte: min }
      }).sort(sortBy);
      return res.send(products);
    }
    if (max) {
      const products = await Product.find({
        subcategory,
        price: { $lte: max }
      }).sort(sortBy);
      return res.send(products);
    }
    if (min && max) {
      const products = await Product.find({
        subcategory,
        price: { $gte: min, $lte: max }
      }).sort(sortBy);
      return res.send(products);
    }
    const products = await Product.find({ subcategory }).sort(sortBy);
    res.send(products);
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
route.get("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
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
      res.send({ price: 50000 });
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
