const authCheckerMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('back');
  } else {
    next();
  }
};

module.exports = { authCheckerMiddleware };
