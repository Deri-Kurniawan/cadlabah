const {
  homeHandler,
  postsHandler,
  postsCreateHandler,
  logoutHandler,
  authPlatformSuccessHandler,
  pageNotFoundHandler,
} = require('./handlers');

const { google, github } = require('../third-party/auth/platforms-strategy-middleware');
const authPlatformMiddleware = require('./middleware/auth-platform-middleware');
const { authCheckerMiddleware } = require('./middleware/auth-checker-middleware');

const Routes = {
  init: (app) => {
    app.get('/', homeHandler);
    app.get('/home', homeHandler);
    app.get('/posts', postsHandler);
    app.get('/posts/create', authCheckerMiddleware, postsCreateHandler);
    app.get('/auth/google', authPlatformMiddleware, google.request);
    app.get('/auth/github', authPlatformMiddleware, github.request);
    app.get('/logout', logoutHandler);
    app.get('/:any/logout', logoutHandler);
    app.get('/auth/success', authPlatformSuccessHandler);
    app.get('/google/callback', google.verify);
    app.get('/github/callback', github.verify);
    app.use('/', pageNotFoundHandler);
  },
};

module.exports = Routes;
