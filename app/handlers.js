const path = require('path');
const { default: axios } = require('axios');
const { getPosts, postPosts } = require('../data/posts-data-source');
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
    notif: req.flash('notif'),
  });
};

const postsHandler = (req, res) => {
  getPosts((posts) => {
    res.render('posts', {
      title: 'Postingan',
      user: req.user,
      posts,
      subTitle: 'Semua Postingan',
      isPostEmptyMessage: 'Postingan Kosong!',
      notif: req.flash('notif'),
    });
  });
};

const postsByCategoryHandler = (req, res) => {
  getPosts((posts) => {
    const postFilteredByCategory = posts.filter((post) => (
      post.category === req.params.categoryName
    ));
    res.render('posts', {
      title: 'Postingan',
      user: req.user,
      posts: postFilteredByCategory,
      subTitle: `Postingan berdasarkan kategori <b>${req.params.categoryName}</b>`,
      isPostEmptyMessage: `Postingan berdasarkan kategori <b>${req.params.categoryName}</b> Kosong!`,
    });
  });
};

const postsCreateHandler = (req, res) => {
  res.render('posts-create', {
    title: 'Buat Postingan',
    user: req.user,
    notif: req.flash('notif'),
  });
};

const postsCreateProcessHandler = (req, res) => {
  const {
    accountId,
    author,
    title,
    description,
    whatsapp,
    phone,
    email,
    category,
    goodsStatus,
  } = req.body;

  const { name, mv } = req.files.image;
  const imageName = Date.now() + name;

  mv(path.join(__dirname, `../public/images/posts/${imageName}`));

  const setPosts = {
    accountId,
    image: imageName,
    title,
    author,
    category,
    description,
    goodsStatus,
    contacts: {
      whatsapp,
      phone,
      email,
    },
    isDone: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  postPosts(setPosts, (respond) => {
    if (respond.status === 201) {
      req.flash('notif', 'Postingan berhasil dibuat!');
      res.redirect('/posts');
    } else {
      req.flash('notif', 'Postingan gagal dibuat!');
      res.redirect('/posts/create');
    }
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
  req.flash('notif', 'Logout Berhasil!');
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
        req.flash('notif', 'Opps.. login gagal! \nCoba lagi nanti');
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
  }

  req.flash('notif', 'Login Sukses!');
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
  postsCreateProcessHandler,
  educationHandler,
  logoutHandler,
  authPlatformSuccessHandler,
  pageNotFoundHandler,
};
