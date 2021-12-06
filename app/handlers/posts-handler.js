const path = require('path');
const { getPosts, postPosts } = require('../models/posts-model');

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
    const { categoryName } = req.params;
    res.render('posts', {
      title: `Postingan kategori ${categoryName}`,
      user: req.user,
      posts: postFilteredByCategory,
      subTitle: `Postingan berdasarkan kategori <b>${categoryName}</b>`,
      isPostEmptyMessage: `Postingan berdasarkan kategori <b>${categoryName}</b> Kosong!`,
      notif: req.flash('notif'),
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
      whatsapp: (whatsapp) ? `+62${whatsapp}` : '',
      phone: (phone) ? `+62${phone}` : '',
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

module.exports = {
  postsHandler,
  postsByCategoryHandler,
  postsCreateHandler,
  postsCreateProcessHandler,
};
