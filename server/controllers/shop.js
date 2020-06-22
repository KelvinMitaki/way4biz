const Product = require("../models/Product");

const route = require("express").Router();
route.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = route;
