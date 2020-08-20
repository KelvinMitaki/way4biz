const request = require("request");

const mongoose = require("mongoose");
const route = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { check, validationResult } = require("express-validator");
const distance = require("google-distance-matrix");
const moment = require("moment");
const { v4 } = require("uuid");
const Mpesa = require("mpesa-node");

const Product = require("../models/Product");
const auth = require("../middlewares/is-auth");
const Order = require("../models/Order");
const Review = require("../models/Reviews");
const Distance = require("../models/Distance");
const Complaint = require("../models/Complaint");
const Cart = require("../models/Cart");
const Wishlist = require("../models/Wishlist");
const Category = require("../models/Category");
const Contact = require("../models/Contact");

route.post("/api/products", async (req, res) => {
  try {
    const { itemsToSkip } = req.body;
    const products = await Product.aggregate([
      { $match: { onSite: true, stockQuantity: { $gte: 1 } } },
      {
        $lookup: {
          from: "sellers",
          localField: "seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      {
        $project: {
          price: 1,
          name: 1,
          price: 1,
          freeShipping: 1,
          imageUrl: 1,
          stockQuantity: 1,
          seller: { storeName: "$seller.storeName" }
        }
      },
      { $skip: itemsToSkip },
      { $limit: 20 }
    ]);
    const productCount = await Product.aggregate([
      { $match: { onSite: true, stockQuantity: { $gte: 1 } } },
      { $count: "productCount" }
    ]);
    res.send({
      products,
      productCount: productCount.length !== 0 ? productCount[0].productCount : 0
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/api/products/skip/category", async (req, res) => {
  try {
    const { itemsToSkip, test, sort } = req.body;
    const products = await Product.aggregate([
      { $match: { ...test, onSite: true, stockQuantity: { $gte: 1 } } },
      {
        $lookup: {
          from: "sellers",
          localField: "seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      {
        $project: {
          price: 1,
          name: 1,
          price: 1,
          freeShipping: 1,
          imageUrl: 1,
          stockQuantity: 1,
          seller: { storeName: "$seller.storeName" }
        }
      },
      { $sort: sort },
      { $skip: itemsToSkip },
      { $limit: 20 }
    ]);
    if (!products || products.length === 0) {
      return res.status(404).send({ message: "No products in that category" });
    }

    const productCount = await Product.aggregate([
      {
        $match: { ...test, onSite: true, stockQuantity: { $gte: 1 } }
      },
      { $count: test.category }
    ]);

    res.send({ products, productCount: productCount[0][test.category] });
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/api/products/search/term", async (req, res) => {
  try {
    const { itemsToSkip, test, sort, searchTerm } = req.body;
    const products = await Product.aggregate([
      {
        $search: {
          autocomplete: {
            path: "name",
            query: searchTerm,
            fuzzy: {
              maxEdits: 1
            },
            tokenOrder: "sequential"
          }
        }
      },
      { $match: { ...test, onSite: true } },
      {
        $lookup: {
          from: "sellers",
          localField: "seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      {
        $project: {
          price: 1,
          name: 1,
          price: 1,
          freeShipping: 1,
          imageUrl: 1,
          seller: { storeName: "$seller.storeName" }
        }
      },
      { $sort: sort },
      { $skip: itemsToSkip },
      { $limit: 6 }
    ]);
    if (!products || products.length === 0) {
      return res.status(404).send({ message: "No products in that category" });
    }

    const productCount = await Product.aggregate([
      {
        $search: {
          autocomplete: {
            path: "name",
            query: searchTerm,
            fuzzy: {
              maxEdits: 1
            },
            tokenOrder: "sequential"
          }
        }
      },
      { $match: { ...test, onSite: true } },
      { $count: "products" }
    ]);

    res.send({ products, productCount: productCount[0].products });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/api/products/filter", async (req, res) => {
  try {
    // const { category } = req.params;
    const { test } = req.body;
    // **TODO** RATING FREE SHIPPING SORT BY
    // **TODO** FIX FILTERING
    // FREE SHIPPING RATING LATEST ON

    let products = await Product.find({ ...test, onSite: true });

    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get(
  "/api/products/category/subcategory/:subcategory",
  async (req, res) => {
    try {
      const { subcategory } = req.params;
      const products = await Product.find({ subcategory, onSite: true });
      if (!products || products.length === 0) {
        return res
          .status(404)
          .send({ message: "No products in that subcategory" });
      }
      res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.post("/api/product/search", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const test = await Product.aggregate([
      {
        $search: {
          autocomplete: {
            path: "name",
            query: searchTerm,
            fuzzy: {
              maxEdits: 1
            },
            tokenOrder: "sequential"
          }
        }
      },
      {
        $match: { onSite: true }
      },
      {
        $limit: 5
      },
      {
        $project: {
          name: 1,
          imageUrl: 1,
          price: 1
        }
      }
    ]);
    res.send(test);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({
      _id: productId,
      onSite: true
    }).populate("seller", "storeName");

    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// BUYER ORDERS
route.get("/api/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.session.user._id }).sort({
      createdAt: -1
    });
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
        return res.status(401).send({ message: errors.array()[0].msg });
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

let checkoutRequestId;
let orderId;
route.post(
  "/api/new/order",
  auth,
  check("formValues.payment")
    .not()
    .isEmpty()
    .withMessage("Please choose a valid payment method"),
  check("formValues.delivery")
    .not()
    .isEmpty()
    .withMessage("Please choose a valid delivery method"),
  check("distanceId")
    .not()
    .isEmpty()
    .withMessage("Please choose a valid location"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { formValues, cart, distanceId } = req.body;
      const id = req.body.id;
      const { _id } = req.session.user;
      const test = cart.map(item => {
        return {
          product: item._id,
          quantity: item.quantity
        };
      });
      cart.forEach(async item => {
        await Product.findByIdAndUpdate(item._id, {
          $inc: { stockQuantity: -item.quantity }
        });
      });
      const price = cart
        .map(item => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);
      const distance = await Distance.findById(distanceId);
      if (formValues.payment === "mpesa") {
        const mpesaApi = new Mpesa({
          consumerKey: process.env.MPESA_CONSUMER_KEY,
          consumerSecret: process.env.MPESA_CONSUMER_SECRET
        });
        mpesaApi
          .lipaNaMpesaOnline(
            `254${req.session.user.phoneNumber}`,
            1,
            "https://e-commerce-gig.herokuapp.com/api/stk_callback",
            "Way4Biz",
            "Online payment",
            "CustomerPayBillOnline",
            "174379",
            process.env.MPESA_PASS_KEY
          )
          .then(res => {
            console.log(res.data);
            checkoutRequestId = res.data.CheckoutRequestID;
          })
          .catch(err => {
            console.log("err", err);
          });
        const order = new Order({
          items: test,
          paymentMethod: formValues.payment,
          deliveryMethod: formValues.delivery,
          totalPrice: price + Math.round(distance.shippingFees),
          buyer: _id,
          buyerSeller: _id,
          distance: distanceId
        });
        await order.save();
        orderId = order._id;
        const orderWithDistance = await Order.findById(order._id).populate(
          "distance"
        );
        return res.send(orderWithDistance);
      }
      // **STRIPE*/
      if (id) {
        const idempotencyKey = v4();
        const charge = await stripe.paymentIntents.create(
          {
            amount: (price + Math.round(distance.shippingFees)) * 100,
            currency: "kes",
            description: `payed ${
              price + Math.round(distance.shippingFees)
            } to account by ${req.session.user.email}`,
            payment_method: id,
            confirm: true
          },
          { idempotencyKey }
        );
        console.log(charge.charges.data);
        const order = new Order({
          items: test,
          paymentMethod: formValues.payment,
          deliveryMethod: formValues.delivery,
          totalPrice: price + Math.round(distance.shippingFees),
          buyer: _id,
          buyerSeller: _id,
          distance: distanceId,
          paid: true,
          brand: charge.charges.data[0].payment_method_details.card.brand,
          last4: charge.charges.data[0].payment_method_details.card.last4
        });
        await order.save();
        const orderWithDistance = await Order.findById(order._id).populate(
          "distance items.product"
        );
        return res.send(orderWithDistance);
      }
      res.status(401).send({ message: "Invalid ID" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);
route.post("/api/mpesa/paid/order", auth, async (req, res) => {
  try {
    const url =
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");
    request(
      {
        url,
        headers: {
          Authorization: "Basic " + auth
        }
      },
      (err, response, body) => {
        if (err) return console.log("err", err);
        const datevalues = moment().format("YYYYMMDDHHmmss");
        const STK_URL =
          "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";
        request(
          {
            method: "POST",
            url: STK_URL,
            headers: {
              Authorization: "Bearer " + JSON.parse(body).access_token
            },
            json: {
              BusinessShortCode: "174379",
              Password: Buffer.from(
                `174379${process.env.MPESA_PASS_KEY}${datevalues}`
              ).toString("base64"),
              Timestamp: datevalues,
              CheckoutRequestID: checkoutRequestId
            }
          },
          async (err, response, body2) => {
            if (err) {
              return res.send(err);
            }
            console.log(body2);
            if (body2.ResultCode && body2.ResultCode === "0") {
              await Order.findByIdAndUpdate(orderId, {
                mpesaCode: body2.ResultCode,
                mpesaDesc: body2.ResultDesc,
                paid: true
              });
              const savedOrder = await Order.findById(orderId).populate(
                "distance items.product"
              );

              return res.send(savedOrder);
            }
            if (body2.ResultCode && body2.ResultCode !== "0") {
              await Order.findByIdAndUpdate(orderId, {
                mpesaCode: body2.ResultCode,
                mpesaDesc: body2.ResultDesc,
                cancelled: true
              });
              const savedOrder = await Order.findById(orderId).populate(
                "distance items.product"
              );

              return res.send(savedOrder);
            }
            await Order.findByIdAndDelete(orderId);
            res.send({ message: "error" });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

route.delete("/api/delete/whole/cart", auth, async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ buyer: req.session.user._id });
    res.send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});
// CREATE PRODUCT INDEX
// FIX THIS
route.get("/api/products/find/categories", async (req, res) => {
  try {
    const category = await Product.aggregate([
      { $group: { _id: "$category" } },
      { $limit: 9 },
      { $sort: { _id: 1 } }
    ]);
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/fetch/all/categories", async (req, res) => {
  try {
    const categories = await Product.aggregate([
      {
        $group: { _id: "$category" }
      },
      { $sort: { _id: 1 } }
    ]);
    const catIcons = await Category.find({}).select({
      "category.icon": 1,
      "category.main": 1,
      _id: 0
    });
    const newCats = categories.map(category => {
      const catFound = catIcons.find(
        icon => icon.category.main === category._id
      );
      if (catFound) {
        return {
          ...category,
          icon: catFound.category.icon
        };
      }
      return category;
    });
    res.send(newCats);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/buyer/order/details/:orderId", auth, async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId)
      .populate("items.product")
      .exec();
    if (!order) {
      return res.status(404).send({ message: "No order with that Id" });
    }
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});
// FIX FETCH ALL REVIEWS FOR A CERTAIN PRODUCT  WHICH SHOULD APPEAR ON THE PRODUCT
route.get("/api/product/reviews/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId })
      .populate("user")
      .populate("userSeller")
      .sort({ createdAt: -1 });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// CHECK ON ORDERS FOR LOGGED IN USER WHERE REVIEWED===FALSE
route.get("/api/pending/reviews", auth, async (req, res) => {
  try {
    const orders = await Order.aggregate([
      { $match: { buyer: req.session.user._id, delivered: true } },
      // { $project: { buyer: 1, delivered: 1, items: 1 } },
      {
        $project: {
          items: {
            $filter: {
              input: "$items",
              as: "i",
              cond: { $eq: ["$$i.reviewed", false] }
            }
          }
        }
      },
      {
        $unwind: "$items"
      },
      {
        $lookup: {
          from: "products",
          localField: "items.product",
          foreignField: "_id",
          as: "productData"
        }
      },
      {
        $unwind: "$productData"
      },
      {
        $group: {
          _id: "$_id",
          items: {
            $push: "$items"
          },
          productData: {
            $push: "$productData"
          }
        }
      },
      { $sort: { createdAt: -1 } }
    ]);
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});
// ADD A NEW REVIEW
route.post(
  "/api/new/review/:productId/:orderId",
  auth,
  check("title")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Please enter a valid title"),
  check("body")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Please enter a valid body"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send(errors.array()[0].msg);
      }
      const { title, body, rating } = req.body;
      const { orderId, productId } = req.params;

      const order = await Order.findOne({
        _id: orderId,
        buyer: req.session.user._id,
        items: { $elemMatch: { reviewed: false, product: productId } }
      });
      if (!order) {
        return res.status(404).send({ message: "No order with that ID" });
      }
      const review = new Review({
        title,
        body,
        user: req.session.user._id,
        userSeller: req.session.user._id,
        order: orderId,
        product: productId,
        rating
      });
      await review.save();
      await Order.findOneAndUpdate(
        { "items.product": productId, _id: orderId },
        { $set: { "items.$.reviewed": true } }
      );
      const product = await Product.findById(productId);
      const reviews = await Review.find({ product: productId });
      product.rating = Math.round(
        reviews.map(order => order.rating).reduce((acc, cur) => acc + cur, 0) /
          reviews.length
      );
      await product.save();
      res.send(review);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.get("/api/url/add/review/:productId/:orderId", auth, async (req, res) => {
  try {
    const { productId, orderId } = req.params;
    const order = await Order.findOne({
      _id: orderId,
      buyer: req.session.user._id,
      items: { $elemMatch: { reviewed: false, product: productId } }
    });
    res.send({ order });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post(
  "/api/buyer/destination",
  auth,
  check("origins").not().isEmpty().withMessage("You must enter the origin"),
  check("destination")
    .not()
    .isEmpty()
    .withMessage("You must enter the destination"),
  (req, res) => {
    const { _id } = req.session.user;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send({ message: errors.array()[0].msg });
    }
    const { origins, destination, deliveryMethod } = req.body;
    // const origins = ["nairobi"];
    // const destination = ["mombasa"];
    // 1KM===3KSH
    const mode = "DRIVING";
    distance.key(process.env.MATRIX);
    distance.matrix(origins, destination, mode, async (err, response) => {
      if (err) {
        return res.status(404).send(err);
      }
      let shippingFees = 0;
      if (
        deliveryMethod &&
        deliveryMethod === "Normal" &&
        response.rows[0].elements[0].distance.value / 1000 <= 10
      ) {
        shippingFees = 0;
      }
      if (
        deliveryMethod &&
        deliveryMethod === "Normal" &&
        response.rows[0].elements[0].distance.value / 1000 > 10
      ) {
        shippingFees =
          (response.rows[0].elements[0].distance.value / 1000) * 10;
      }
      if (deliveryMethod && deliveryMethod === "Express") {
        shippingFees =
          (response.rows[0].elements[0].distance.value / 1000) * 25;
      }
      const distanceExists = await Distance.findOne({
        destination: response.destination_addresses[0],
        distance: response.rows[0].elements[0].distance.value,
        shippingFees,
        buyer: _id
      });
      if (!distanceExists) {
        const dist = new Distance({
          destination: response.destination_addresses[0],
          distance: response.rows[0].elements[0].distance.value,
          shippingFees,
          buyer: _id
        });
        await dist.save();
        return res.send(dist);
      }
      res.send(distanceExists);
    });
  }
);
route.get("/api/fetch/store/products/:sellerId", async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $match: {
          seller: mongoose.Types.ObjectId(req.params.sellerId),
          onSite: true
        }
      },
      {
        $lookup: {
          from: "sellers",
          localField: "seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      {
        $project: {
          name: 1,
          price: 1,
          imageUrl: 1,
          storeName: "$seller.storeName",
          freeShipping: 1
        }
      }
    ]);
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post(
  "/api/buyer/new/complaint/:orderId/:productId",
  auth,
  check("body")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid complaint"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { _id } = req.session.user;
      const { body } = req.body;
      const { orderId, productId } = req.params;
      const complaint = new Complaint({
        buyer: _id,
        buyerSeller: _id,
        body,
        order: orderId,
        product: productId
      });
      await complaint.save();
      res.send(complaint);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.get(
  "/api/redirect/on/not/delivered/:productId/:orderId",
  auth,
  async (req, res) => {
    try {
      const { productId, orderId } = req.params;
      const order = await Order.findOne({
        _id: orderId,
        delivered: true,
        buyer: req.session.user._id,
        items: { $elemMatch: { product: productId } }
      });
      res.send({ order });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.get("/api/fetch/buyer/complaints", auth, async (req, res) => {
  try {
    const complaints = await Complaint.aggregate([
      { $match: { buyer: mongoose.Types.ObjectId(req.session.user._id) } },
      {
        $lookup: {
          from: "users",
          localField: "buyer",
          foreignField: "_id",
          as: "buyer"
        }
      },
      {
        $lookup: {
          from: "orders",
          localField: "order",
          foreignField: "_id",
          as: "order"
        }
      },
      {
        $lookup: {
          from: "sellers",
          localField: "buyerSeller",
          foreignField: "_id",
          as: "buyer"
        }
      },
      { $unwind: "$order" },
      {
        $project: {
          product: 1,
          body: 1,
          buyer: 1,
          items: {
            $filter: {
              input: "$order.items",
              as: "i",
              cond: { $eq: ["$$i.product", "$product"] }
            }
          }
        }
      },
      { $unwind: "$items" },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      {
        $lookup: {
          from: "sellers",
          localField: "product.seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      { $unwind: "$buyer" },
      {
        $project: {
          buyerFirstName: "$buyer.firstName",
          buyerLastName: "$buyer.lastName",
          buyerPhoneNumber: "$buyer.phoneNumber",
          sellerFirstName: "$seller.firstName",
          sellerLastName: "$seller.lastName",
          sellerPhoneNumber: "$seller.phoneNumber",
          sellerEmail: "$seller.email",
          sellerId: "$seller._id",
          productName: "$product.name",
          productPrice: "$product.price",
          quantityOrdered: "$items.quantity",
          imageUrl: "$product.imageUrl",
          body: 1,
          storeName: "$seller.storeName"
        }
      },
      { $sort: { createdAt: -1 } }
    ]);
    res.send(complaints);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/api/fetch/buyer/complaint/:complaintId", auth, async (req, res) => {
  try {
    const complaint = await Complaint.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.complaintId),
          buyer: mongoose.Types.ObjectId(req.session.user._id)
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "buyer",
          foreignField: "_id",
          as: "buyer"
        }
      },
      {
        $lookup: {
          from: "orders",
          localField: "order",
          foreignField: "_id",
          as: "order"
        }
      },
      {
        $lookup: {
          from: "sellers",
          localField: "buyerSeller",
          foreignField: "_id",
          as: "buyer"
        }
      },
      { $unwind: "$order" },
      {
        $project: {
          product: 1,
          body: 1,
          buyer: 1,
          items: {
            $filter: {
              input: "$order.items",
              as: "i",
              cond: { $eq: ["$$i.product", "$product"] }
            }
          }
        }
      },
      { $unwind: "$items" },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      {
        $lookup: {
          from: "sellers",
          localField: "product.seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      { $unwind: "$buyer" },
      {
        $project: {
          buyerFirstName: "$buyer.firstName",
          buyerLastName: "$buyer.lastName",
          buyerPhoneNumber: "$buyer.phoneNumber",
          sellerFirstName: "$seller.firstName",
          sellerLastName: "$seller.lastName",
          sellerPhoneNumber: "$seller.phoneNumber",
          sellerEmail: "$seller.email",
          sellerId: "$seller._id",
          productName: "$product.name",
          productPrice: "$product.price",
          quantityOrdered: "$items.quantity",
          imageUrl: "$product.imageUrl",
          storeName: "$seller.storeName",
          body: 1
        }
      },
      { $sort: { createdAt: -1 } }
    ]);
    res.send({ complaint: complaint[0] && complaint[0] ? complaint[0] : {} });
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/products/find/subcategories/:category", async (req, res) => {
  try {
    const subcategories = await Product.aggregate([
      {
        $match: { category: req.params.category }
      },
      {
        $project: { subcategory: 1 }
      },
      { $group: { _id: "$subcategory" } }
    ]);
    res.send(subcategories);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post(
  "/api/user/new/cart",
  auth,
  check("cart").isArray({ min: 0 }).withMessage("invalid"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send(errors.array()[0].msg);
      }
      const { cart } = req.body;
      const { _id } = req.session.user._id;
      const buyerExists = await Cart.findOne({ buyer: _id });
      if (buyerExists) {
        const updatedCart = await Cart.findOneAndUpdate(
          { buyer: _id },
          { items: cart }
        );
        await updatedCart.save();
        return res.send(updatedCart);
      }
      const newCart = new Cart({
        buyer: _id,
        items: cart
      });
      await newCart.save();
      res.send(newCart);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.post(
  "/api/user/new/wishlist",
  auth,
  check("wishlist").isArray({ min: 0 }).withMessage("invalid"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send(errors.array()[0].msg);
      }
      const { wishlist } = req.body;
      const { _id } = req.session.user._id;

      wishlist.map(item => {
        if (item && Object.keys(item).length === 0) {
          return res.status(401).send({ message: "Invalid wishlist" });
        }
        if (!item) {
          return res.status(401).send({ message: "Empty" });
        }
      });
      const buyerExists = await Wishlist.findOne({ buyer: _id });
      if (buyerExists) {
        const updatedWishlist = await Wishlist.findOneAndUpdate(
          { buyer: _id },
          { items: wishlist }
        );
        await updatedWishlist.save();
        return res.send(updatedWishlist);
      }
      const newWishlist = new Wishlist({
        buyer: _id,
        items: wishlist
      });
      await newWishlist.save();
      res.send(newWishlist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

route.get("/api/user/fetch/cart/items", auth, async (req, res) => {
  try {
    const { _id } = req.session.user;
    const cart = await Cart.aggregate([
      { $match: { buyer: _id } },
      {
        $lookup: {
          from: "products",
          localField: "items.product",
          foreignField: "_id",
          as: "products"
        }
      },
      { $unwind: "$products" },
      {
        $project: {
          product: {
            freeShipping: "$products.freeShipping",
            name: "$products.name",
            price: "$products.price",
            stockQuantity: "$products.stockQuantity",
            seller: "$products.seller",
            imageUrl: "$products.imageUrl",
            _id: "$products._id"
          },
          items: 1
        }
      }
    ]);
    const newCart = cart.map(query => {
      const item = query.items.find(
        item => item.product.toString() === query.product._id.toString()
      );
      if (item) {
        return {
          ...query.product,
          quantity: item.quantity
        };
      }
      return query;
    });
    res.send(newCart);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/api/fetch/wishlits/products", auth, async (req, res) => {
  try {
    const { _id } = req.session.user;
    const wishlist = await Wishlist.aggregate([
      { $match: { buyer: _id } },
      { $project: { _id: "$items._id" } }
    ]);
    const products = await Product.aggregate([
      {
        $match: {
          _id: {
            $in:
              wishlist.length !== 0
                ? wishlist[0]._id.map(id => mongoose.Types.ObjectId(id))
                : []
          }
        }
      },
      {
        $project: {
          freeShipping: 1,
          name: 1,
          price: 1,
          stockQuantity: 1,
          imageUrl: 1,
          seller: 1
        }
      },
      {
        $lookup: {
          from: "sellers",
          localField: "seller",
          foreignField: "_id",
          as: "seller"
        }
      },
      { $unwind: "$seller" },
      {
        $project: {
          freeShipping: 1,
          name: 1,
          price: 1,
          stockQuantity: 1,
          imageUrl: 1,
          seller: { storeName: "$seller.storeName" }
        }
      }
    ]);
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.patch(
  "/api/delete/wishlist",
  auth,
  check("productId").not().isEmpty().withMessage("Invalid Id"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { _id } = req.session.user;
      const { productId } = req.body;
      const wishlist = await Wishlist.findOneAndUpdate(
        { buyer: _id },
        { $pull: { items: { _id: productId } } }
      );
      await wishlist.save();
      res.send(wishlist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.post(
  "/api/contact/admin",
  auth,
  check("reason").not().isEmpty().withMessage("reason must not be empty"),
  check("subject").not().isEmpty().withMessage("Subject must not be empty"),
  check("message")
    .isLength({ min: 20 })
    .withMessage("Message must be 20 characters minimum"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { _id } = req.session.user;
      const { reason, subject, message } = req.body;
      const contact = new Contact({
        user: _id,
        userSeller: _id,
        reason,
        subject,
        message
      });
      await contact.save();
      res.send({ message: "Success" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
route.get("/api/current_user/hey", (req, res) => {
  res.send({ message: "Hey there" });
});

module.exports = route;
