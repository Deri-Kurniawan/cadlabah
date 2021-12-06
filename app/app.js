const express = require('express');
const Settings = require('./settings');
const Routes = require('./routes');
const Server = require('./server');
require('../third-party/auth/platforms-strategy');

const app = express();

Settings.set(app, express);
Routes.set(app);
Server.run(app);
