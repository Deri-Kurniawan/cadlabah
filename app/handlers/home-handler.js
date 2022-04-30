const { getPosts } = require('../models/posts-model');
const { getUsers } = require('../models/users-model');

const homeHandler = async (req, res) => {
  let usersTotal = 0;
  let postsTotal = 0;
  let helpedTotal = 0;

  getUsers((users) => {
    usersTotal = users.length;

    getPosts((posts) => {
      postsTotal = posts.length;
      helpedTotal = posts.filter((post) => post.isDone === true).length;

      res.render('home', {
        title: 'Home',
        user: req.user,
        usersTotal,
        postsTotal,
        helpedTotal,
        notif: req.flash('notif'),
      });
    });
  });
};

module.exports = {
  homeHandler,
};
