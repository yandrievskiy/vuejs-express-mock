const postsData = require('../models/posts');
const { chunk } = require('../helpers');

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
  console.log(chunk(postsData, req.query.perPage));


  res.status(200).send(postsData);
};

module.exports = {
  createUser,
  getPosts,
}