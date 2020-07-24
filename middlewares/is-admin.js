module.exports = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/sign-in");
  }
  if (!req.session.user.isAdmin) {
    return res.status(401).send({ admin: "You are not admin" });
  }
  next();
};
