const express = require('express');
const Settings = require('./configs/settings');
const Routes = require('./configs/routes');
const Server = require('./configs/server');

const app = express();

Settings.set(app, express);
Routes.set(app);
Server.run(app);
