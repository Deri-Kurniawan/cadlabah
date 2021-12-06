const _PORT = process.env.SERVER_PORT || 9000;

const CONFIG = {
  BASE_URL: (process.env.MODE === 'production') ? 'https://cadlabah.glitch.me/' : `http://localhost:${_PORT}/`,
  BASE_URL_MOCKAPI: 'https://619b71a827827600174455d9.mockapi.io/api/',
  SERVER_PORT: _PORT,
};

module.exports = CONFIG;
