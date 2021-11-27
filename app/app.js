const express = require('express');
const Settings = require('./settings');
const Routes = require('./routes');
const Server = require('./server');

const app = express();

const application = {
  run: (appInstance, expressInstance) => {
    Settings.init(appInstance, expressInstance);
    Routes.init(appInstance);
    Server.init(appInstance);
  },
};

application.run(app, express);
