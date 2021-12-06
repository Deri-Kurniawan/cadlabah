const { BASE_URL } = require('../configs/config');

const pageNotFoundHandler = (req, res) => {
  res.status(404).render('errors/404', {
    title: 'Page Not Found',
    baseUrl: BASE_URL,
  });
};

module.exports = { pageNotFoundHandler };
