const Product = require("../models/Product");
const auth = require("../middlewares/is-auth");

const route = require("express").Router();
route.get("/api/products/:sellerId", auth, async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ seller: sellerId });
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/product/:sellerId", auth, async (req, res) => {
  try {
    const { sellerId } = req.params;
    const {
      name,
      price,
      stockQuantity,
      subcategory,
      description,
      category
    } = req.body;
    const product = new Product({
      name,
      price,
      stockQuantity,
      category,
      subcategory,
      seller: sellerId,
      description
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.patch("/api/product/:sellerId/:productId", auth, async (req, res) => {
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
route.delete("/api/product/:sellerId/:productId", auth, async (req, res) => {
  try {
    const { productId, sellerId } = req.params;
    await Product.findOneAndDelete({ _id: productId, seller: sellerId });
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
