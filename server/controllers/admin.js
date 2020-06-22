const Product = require("../models/Product");

const route = require("express").Router();
route.post("/api/product", async (req, res) => {
  try {
    const { name, price, quantity, subcategory } = req.body;
    const product = new Product({ name, price, quantity, subcategory });
    await product.save();
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = route;
