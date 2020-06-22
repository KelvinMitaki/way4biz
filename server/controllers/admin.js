const Product = require("../models/Product");

const route = require("express").Router();
route.get("/api/products/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ seller: sellerId });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

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

route.patch("/api/product/:sellerId/:productId", async (req, res) => {
  try {
    const { productId, sellerId } = req.params;
    const { name, price, quantity } = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId, seller: sellerId },
      {
        name,
        price,
        quantity
      }
    );
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.delete("/api/product/:sellerId/:productId", async (req, res) => {
  try {
    const { productId, sellerId } = req.params;
    await Product.findOneAndDelete({ _id: productId, seller: sellerId });
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
