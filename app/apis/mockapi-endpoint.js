const { BASE_URL_MOCKAPI } = require('../configs/config');

const API_ENDPOINT = {
  getUsers: `${BASE_URL_MOCKAPI}users`,
  getUser: (id) => `${BASE_URL_MOCKAPI}users/${id}`,
  postUser: () => `${BASE_URL_MOCKAPI}users`,
  putUser: (id) => `${BASE_URL_MOCKAPI}users/${id}`,
  deleteUser: (id) => `${BASE_URL_MOCKAPI}users/${id}`,
  getPosts: `${BASE_URL_MOCKAPI}posts`,
  getPost: (id) => `${BASE_URL_MOCKAPI}posts/${id}`,
  postPosts: () => `${BASE_URL_MOCKAPI}posts`,
  putPost: (id) => `${BASE_URL_MOCKAPI}posts/${id}`,
  deletePost: (id) => `${BASE_URL_MOCKAPI}posts/${id}`,
};

module.exports = API_ENDPOINT;
