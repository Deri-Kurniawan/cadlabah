const cors = require('cors');
const path = require('path');

const Settings = {
  init: (app, express) => {
    app.set('view engine', 'ejs');
    app.set('trust proxy', 1);
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '/node_modules/')));
    app.use(express.static('public'));
    app.use(express.json());
  },
};

module.exports = Settings;
