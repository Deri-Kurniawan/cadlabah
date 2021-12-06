const educationHandler = (req, res) => {
  res.render('tips-dan-trik', {
    title: 'Edukasi',
    user: req.user,
  });
};

module.exports = {
  educationHandler,
};
