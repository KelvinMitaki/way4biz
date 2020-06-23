const route = require("express").Router();

const Product = require("../models/Product");
const auth = require("../middlewares/is-auth");
const Order = require("../models/Order");

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

module.exports = route;
