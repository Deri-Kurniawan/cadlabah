const homeHandler = (req, res) => {
  res.render('home', {
    title: 'Home',
  });
};

const pageNotFoundHandler = (req, res) => {
  res.status(404).render('errors/404', {
    title: 'Page Not Found',
  });
};

module.exports = {
  homeHandler,
  pageNotFoundHandler,
};
