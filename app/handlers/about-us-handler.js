const aboutUsHandler = (req, res) => {
  res.render('about-us', {
    title: 'Tentang Kami',
    user: req.user,
  });
};

module.exports = {
  aboutUsHandler,
};
