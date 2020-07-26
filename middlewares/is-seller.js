module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({ buyer: "Please sign in to continue" });
  }
  if (
    req.session.user &&
    req.session.user.storeName &&
    !req.session.user.isSeller
  ) {
    return res
      .status(401)
      .send({ profiling: "Please finish your registration" });
  }
  if (req.session.user && !req.session.user.isSeller) {
    return res
      .status(401)
      .send({ seller: "Please sign in as a seller to continue" });
  }
  if (req.session.user && req.session.user.isAdmin) {
    return res.status(401).send({ seller: "You are not a seller" });
  }
  next();
};
