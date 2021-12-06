const { SERVER_PORT, BASE_URL } = require('./config');

const Server = {
  run: (app) => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server port selected ${SERVER_PORT}`);
      console.log(`Server running at ${BASE_URL}`);
    });
  },
};

module.exports = Server;
