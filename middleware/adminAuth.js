module.exports = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.isAdmin) {
    next();
  } else {
    res.status(403).send('Access denied: Admins only');
  }
};
