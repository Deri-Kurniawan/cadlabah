const express = require('express');
const Routes = require('./routes');
const Server = require('./server');
const Settings = require('./settings');
const app = express();

const application = {
  run: (app, express) => {
    Server.init(app);
    Routes.init(app);
    Settings.init(app, express);
  },
};

application.run(app, express);
