module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({ buyer: "Please sign in to continue" });
  }
  if (req.session.user && !req.session.user.isSeller) {
    return res
      .status(401)
      .send({ seller: "Please sign in as a seller to continue" });
  }
  next();
};
