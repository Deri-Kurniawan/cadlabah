const authPlatformMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.flash('notif', 'Anda sudah login!');
    res.redirect('back');
  } else {
    next();
  }
};

module.exports = authPlatformMiddleware;
