const { default: axios } = require('axios');
const { getUsers } = require('../data/usersDataSource');
const API_ENDPOINT = require('../globals/api-endpoint');

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
  res.redirect('/');
};

const authPlatformSuccessHandler = async (req, res) => {
  const { platform } = req.query;
  const reqUser = req.user || null;
  const setUser = {
    accountId: null,
    platform: null,
    fullName: null,
    email: null,
    isActive: null,
    createdAt: null,
  };

  if (reqUser !== null) {
    setUser.accountId = Number(reqUser.id);
    setUser.platform = platform;
    setUser.fullName = reqUser.displayName;
    setUser.isActive = 1;
    setUser.createdAt = new Date().toISOString();

    switch (platform.toLowerCase()) {
      case 'google':
        setUser.email = reqUser.email;
        break;

      case 'github':
        setUser.email = reqUser._json.email;
        break;

      default:
        req.flash('authError', 'Opps someting went wrong! \n please try again later!');
        res.redirect('/');
        break;
    }

    getUsers((users) => {
      const userExists = users.find((user) => (Number(user.accountId) === Number(setUser.accountId)
      && user.platform.toLowerCase() === setUser.platform.toLowerCase()));

      if (!userExists) {
        axios.post(API_ENDPOINT.postUser(), setUser);
      }
    });
  } else {
    res.redirect('/');
  }
  res.redirect('/');
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
