module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/sign-in");
  }
  if (req.session.user && !req.session.user.isSeller) {
    return res.redirect("/seller/sign-in");
  }
  next();
};
