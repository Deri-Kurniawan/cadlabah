const homeHandler = (req, res) => {
  res.render('home', {
    title: 'Home',
    user: req.user,
  });
};

const postsHandler = (req, res) => {
  res.render('posts', {
    title: 'Postingan',
    user: req.user,
  });
};

const postsCreateHandler = (req, res) => {
  res.render('posts-create', {
    title: 'Buat Postingan',
    user: req.user,
  });
};

const logoutHandler = (req, res) => {
  req.logout();
  res.redirect('back');
};

const authPlatformSuccessHandler = (req, res) => {
  const { platform } = req.query;

  if (!platform) {
    throw new Error('URL HAS MODIFIED');
  }

  res.redirect('back');
};

const pageNotFoundHandler = (req, res) => {
  res.status(404).render('errors/404', {
    title: 'Page Not Found',
  });
};

module.exports = {
  homeHandler,
  postsHandler,
  postsCreateHandler,
  logoutHandler,
  authPlatformSuccessHandler,
  pageNotFoundHandler,
};
