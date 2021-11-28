const {
  homeHandler, postsHandler, logoutHandler, authPlatformSuccessHandler, pageNotFoundHandler,
} = require('./handlers');

const { google, github } = require('../third-party/auth/platforms-strategy-middleware');
const authMiddleware = require('./middleware/auth-middleware');

const Routes = {
  init: (app) => {
    app.get('/', homeHandler);
    app.get('/home', homeHandler);
    app.get('/posts', postsHandler);
    app.get('/auth/google', authMiddleware, google.request);
    app.get('/auth/github', authMiddleware, github.request);
    app.get('/logout', logoutHandler);
    app.get('/auth/success', authPlatformSuccessHandler);
    app.get('/google/callback', google.verify);
    app.get('/github/callback', github.verify);
    app.use('/', pageNotFoundHandler);
  },
};

module.exports = Routes;
