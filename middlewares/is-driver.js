module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({ message: "Please log in to continue" });
  }
  if (!req.session.driver) {
    return res.status(401).send({ message: "Not authorized" });
  }
  next();
};
