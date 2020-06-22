const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");

const adminRoutes = require("./controllers/admin");
const authRoutes = require("./controllers/auth");
const shopRoutes = require("./controllers/shop");

const app = express();

const sessionStore = new MongoStore({
  uri: process.env.MONGO_URI,
  collection: "sessions"
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
    cookie: {
      sameSite: true,
      maxAge: 1000 * 60 * 60,
      secure: process.env.PRODUCTION
    }
  })
);
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
