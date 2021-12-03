const authCheckerMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('notif', 'Harap login terlebih dahulu!');
    res.redirect('back');
  } else {
    next();
  }
};

module.exports = { authCheckerMiddleware };
