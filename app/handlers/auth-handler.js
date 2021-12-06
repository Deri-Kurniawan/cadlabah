const { default: axios } = require('axios');
const MailHelper = require('../helpers/mail-helper');
const { getUsers } = require('../models/users-model');
const API_ENDPOINT = require('../apis/mockapi-endpoint');

const authPlatformSuccessHandler = async (req, res) => {
  const { platform } = req.query;
  const reqUser = req.user || null;
  const setUser = {
    accountId: null,
    platform: null,
    fullName: null,
    email: null,
    isActive: null,
    createdAt: null,
  };

  if (reqUser !== null) {
    setUser.accountId = Number(reqUser.id);
    setUser.platform = platform;
    setUser.fullName = reqUser.displayName;
    setUser.isActive = 1;
    setUser.createdAt = new Date().toISOString();

    switch (platform.toLowerCase()) {
      case 'google':
        setUser.email = reqUser.email;
        break;

      case 'github':
        setUser.email = reqUser._json.email;
        break;

      default:
        req.flash('notif', 'Opps.. login gagal! \nCoba lagi nanti');
        res.redirect('back');
        break;
    }

    getUsers((users) => {
      const userExists = users.find((user) => (Number(user.accountId) === Number(setUser.accountId)
      && user.platform.toLowerCase() === setUser.platform.toLowerCase()));

      if (!userExists) {
        axios.post(API_ENDPOINT.postUser(), setUser);

        // Send email for first time registration
        MailHelper.sendGreetingsFirstTime(MailHelper.mailTransporter(), {
          to: setUser.email,
          fullName: setUser.fullName,
        });
      }
    });
  }

  req.flash('notif', 'Login Sukses!');
  res.redirect('back');
};

const logoutHandler = (req, res) => {
  req.logout();
  req.flash('notif', 'Logout Berhasil!');
  res.redirect('/');
};

module.exports = {
  authPlatformSuccessHandler,
  logoutHandler,
};
