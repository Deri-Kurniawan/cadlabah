const { homeHandler, postsHandler, pageNotFoundHandler } = require('./handlers');

const Routes = {
  init: (app) => {
    app.get('/', homeHandler);
    app.get('/home', homeHandler);
    app.get('/posts', postsHandler);
    app.use('/', pageNotFoundHandler);
  },
};

module.exports = Routes;
