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

module.exports = {
  homeHandler,
};
