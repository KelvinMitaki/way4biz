const express = require("express");
const mongoose = require("mongoose");

const adminRoutes = require("./controllers/admin");
const authRoutes = require("./controllers/auth");
const shopRoutes = require("./controllers/shop");

const app = express();

app.use(authRoutes);
app.use(shopRoutes);
app.use(adminRoutes);

const mongooseConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  console.log("connected to the database");
};
mongooseConnect();
app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);
