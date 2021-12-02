const { default: axios } = require('axios');
const { getPosts } = require('../data/posts-data-source');
const { getUsers } = require('../data/usersDataSource');
const MailHelper = require('./helpers/mail-helper');

const API_ENDPOINT = require('../globals/api-endpoint');

const homeHandler = (req, res) => {
  res.render('home', {
    title: 'Home',
    user: req.user,
    usersTotal: '1.000',
    postsTotal: '2.000',
    helpedTotal: '800',
  });
};

const postsHandler = (req, res) => {
  getPosts((posts) => {
    res.render('posts', {
      title: 'Postingan',
      user: req.user,
      posts,
    });
  });
};

const postsByCategoryHandler = (req, res) => {
  getPosts((posts) => {
    const postFilteredByCategory = posts.filter((post) => (
      post.category === req.params.categoryName
    ));
    res.render('posts-by-category', {
      title: 'Postingan',
      user: req.user,
      posts: postFilteredByCategory,
      categoryName: req.params.categoryName,
    });
  });
};

const postsCreateHandler = (req, res) => {
  res.render('posts-create', {
    title: 'Buat Postingan',
    user: req.user,
  });
};

const educationHandler = (req, res) => {
  res.render('tips-dan-trik', {
    title: 'Education',
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

        // Send email for first time registration
        MailHelper.sendGreetingsFirstTime(MailHelper.mailTransporter(), {
          to: setUser.email,
          fullName: setUser.fullName,
        });
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
  postsByCategoryHandler,
  postsCreateHandler,
  educationHandler,
  logoutHandler,
  authPlatformSuccessHandler,
  pageNotFoundHandler,
};
