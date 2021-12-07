const axios = require('axios').default;
const API_ENDPOINT = require('../apis/mockapi-endpoint');

const getPosts = (callback) => {
  axios.get(API_ENDPOINT.getPosts, {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    const postsDescending = [];
    // Descending sort posts objects
    for (let index = res.data.length - 1; index >= 0; index--) {
      postsDescending.push(res.data[index]);
    }
    callback(postsDescending);
  });
};

const getPost = (id, callback) => {
  axios.get(API_ENDPOINT.getPost(id), {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    callback(res.data);
  });
};

const postPosts = (data, callback) => {
  axios.post(API_ENDPOINT.postPosts(), data, {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    callback(res);
  });
};

const putPost = (id, callback) => {
  axios.put(API_ENDPOINT.putPost(id), { done: true }, {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    callback(res);
  });
};

const deletePost = (id, callback) => {
  axios.delete(API_ENDPOINT.deletePost(id), {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => {
    callback(res);
  });
};

module.exports = {
  getPosts,
  getPost,
  postPosts,
  putPost,
  deletePost,
};
