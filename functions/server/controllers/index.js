const fetch = require("node-fetch");
const paginate = require("paginate-array");
const postsData = require('../models/posts');

const createUser = (req, res) => {
  const data = JSON.parse(req.body);
  const user = {
    firstName: data['firstName'],
    lastName: data['lastName'],
    email: data['email'],
    password: data['password'],
  }

  res.status(200).send(`User successfully created`);
};

const getPosts = (req, res) => {
  const { currentPage = 1, perPage = 10} = req.query;
  const paginateCollection = paginate(postsData, currentPage, perPage);
  res.status(200).send(paginateCollection);
};

module.exports = {
  createUser,
  getPosts,
}