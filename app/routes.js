const {
  homeHandler,
  postsHandler,
  postsByCategoryHandler,
  postsCreateHandler,
  postsCreateProcessHandler,
  educationHandler,
  logoutHandler,
  authPlatformSuccessHandler,
  pageNotFoundHandler,
} = require('./handlers');

const { google, github } = require('../third-party/auth/platforms-strategy-middleware');
const authPlatformMiddleware = require('./middleware/auth-platform-middleware');
const { authCheckerMiddleware } = require('./middleware/auth-checker-middleware');

const Routes = {
  set: (app) => {
    app.get('/', homeHandler);
    app.get('/home', homeHandler);
    app.get('/posts', postsHandler);
    app.get('/posts/category/:categoryName', postsByCategoryHandler);
    app.get('/posts/create', authCheckerMiddleware, postsCreateHandler);
    app.post('/posts/create', authCheckerMiddleware, postsCreateProcessHandler);
    app.get('/edu/tips-dan-trik', educationHandler);
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
