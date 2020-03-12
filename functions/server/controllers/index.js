const createUser = async (req, res) => {
  const data = JSON.parse(req.body);
  const user = {
    firstName: data['firstName'],
    lastName: data['lastName'],
    email: data['email'],
    password: data['password'],
  }
  
  res.status(200).send(`User successfully created`);
};

module.exports = {
  createUser,
}