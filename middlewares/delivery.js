module.exports = (req, res, next) => {
  if (!req.delivery) {
    return res
      .status(401)
      .send({ message: "Please enter your delivery details" });
  }
  next();
};
