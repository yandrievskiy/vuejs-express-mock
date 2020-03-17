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
    password: data['password'],
    gender: data['gender'],
    agree: data['agree']
  }

  res.status(200).send(`User successfully created`);
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

module.exports = {
  auth,
  getPosts,
}