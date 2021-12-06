const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const { BASE_URL } = require('../../configs/config');

const GOOGLE_CLIENT_ID = '799094837740-gfgvlphvh6douai56d9th9kj9n2up2os.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = 'a546149080e04e7e0d48';
const GITHUB_CLIENT_SECRET = '579227d71be21da66cc4cb9046129d7a922bbd3e';

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BASE_URL}google/callback`,
    passReqToCallback: true,
  },
  (request, accessToken, refreshToken, profile, done) => done(null, profile),
));

passport.use(new GitHubStrategy(
  {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: `${BASE_URL}github/callback`,
  },
  (accessToken, refreshToken, profile, cb) => cb(null, profile),
));

passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user, done) => { done(null, user); });
