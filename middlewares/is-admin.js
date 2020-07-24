module.exports = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  if (!req.session.user.isAdmin) {
    return res.redirect("/");
  }
  next();
};
