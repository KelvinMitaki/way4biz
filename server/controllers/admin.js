const Product = require("../models/Product");

const route = require("express").Router();
route.post("/api/product", async (req, res) => {
  try {
    const { name, price, quantity, subcategory } = req.body;
    const product = new Product({ name, price, quantity, subcategory });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.delete("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.patch("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, quantity } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      name,
      price,
      quantity
    });
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = route;
