const { SERVER_PORT, BASE_URL } = require('../globals/config');

const Server = {
  init: (app) => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on ${BASE_URL}`);
    });
  },
};

module.exports = Server;
