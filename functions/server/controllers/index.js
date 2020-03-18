const fetch = require("node-fetch");
const paginate = require("paginate-array");
const postsData = require('../models/posts');
const { mapDataToResponse, validateAuthForm } = require('../helpers');

const auth = (req, res, next) => {
  const data = req.body;
  const errors = validateAuthForm(data);
  if (!errors.status) {
    res.status(422).send(errors);
    return;
  }

  const user = {
    email: data['email'],
    role: 'user',
    token: Math.random().toString(36).substring(7),
  }

  res.status(200).send({user, success: true});
};

const getPosts = (req, res) => {
  let data = postsData;
  const { currentPage = 1, perPage = 10, userId} = req.query;
  if (userId) {
    data = data.filter((obj) => String(obj.userId) === String(userId));
  }
  const paginatedCollection = paginate(data, currentPage, perPage);
  const response = mapDataToResponse(paginatedCollection);
  response.authors = ['All', ...new Set(postsData.map((post) => post.userId))];

  res.status(200).send(response);
};

const getSinglePost = (req, res) => {
  let data = postsData.filter((item) => {
    return String(item.id) === String(req.params.id);
  });

  if (data.length) {
    res.status(200).send(data[0]);
  } else {
    res.status(404).send('Post id not found');
  }

};

module.exports = {
  auth,
  getPosts,
  getSinglePost,
}