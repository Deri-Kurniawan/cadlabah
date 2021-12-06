const { google, github } = require('../third-party/strategy/middleware/platforms-middleware');
const authPlatformMiddleware = require('../middleware/auth-platform-middleware');
const { authCheckerMiddleware } = require('../middleware/auth-checker-middleware');
const { homeHandler } = require('../handlers/home-handler');
const {
  postsHandler, postsByCategoryHandler, postsCreateHandler, postsCreateProcessHandler,
} = require('../handlers/posts-handler');
const { educationHandler } = require('../handlers/education-handler');
const { logoutHandler, authPlatformSuccessHandler } = require('../handlers/auth-handler');
const { pageNotFoundHandler } = require('../handlers/error-page-handler');

const Routes = {
  set: (route) => {
    route.get('/', homeHandler);
    route.get('/home', homeHandler);
    route.get('/posts', postsHandler);
    route.get('/posts/category/:categoryName', postsByCategoryHandler);
    route.get('/posts/create', authCheckerMiddleware, postsCreateHandler);
    route.post('/posts/create', authCheckerMiddleware, postsCreateProcessHandler);
    route.get('/edu/tips-dan-trik', educationHandler);
    route.get('/auth/google', authPlatformMiddleware, google.request);
    route.get('/auth/github', authPlatformMiddleware, github.request);
    route.get('/logout', logoutHandler);
    route.get('/:any/logout', logoutHandler);
    route.get('/auth/success', authPlatformSuccessHandler);
    route.get('/google/callback', google.verify);
    route.get('/github/callback', github.verify);
    route.use('/', pageNotFoundHandler);
  },
};

module.exports = Routes;
