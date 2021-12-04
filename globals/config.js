const PORT = process.env.SERVER_PORT || 8000;

const CONFIG = {
  BASE_URL: (process.env.MODE === 'production') ? 'https://cadlabah.glitch.me/' : `http://localhost:${PORT}/`,
  BASE_URL_API: 'https://619b71a827827600174455d9.mockapi.io/api/',
  SERVER_PORT: PORT,
};

module.exports = CONFIG;
