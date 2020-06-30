module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/api/login");
  }
  if (req.session.user && !req.session.user.isSeller) {
    return res.redirect("/");
  }
  next();
};
