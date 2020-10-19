module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({ message: "Please log in to continue" });
  }
  if (!req.session.user) {
    return res.status(401).send({ message: "Not authorized" });
  }
  if (req.session.user && !req.session.user.IdNumber) {
    return res.status(401).send({ message: "Not authorized" });
  }
  next();
};
