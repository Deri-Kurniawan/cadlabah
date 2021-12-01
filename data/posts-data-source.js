const axios = require('axios').default;
const API_ENDPOINT = require('../globals/api-endpoint');

const getPosts = (callback) => {
  axios.get(API_ENDPOINT.getPosts, {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    callback(res.data);
  });
};

module.exports = {
  getPosts,
};
