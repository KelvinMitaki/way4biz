const express = require("express");
const mongoose = require("mongoose");

const app = express();

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
