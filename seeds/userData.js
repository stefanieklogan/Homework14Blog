const { User } = require('../models');

const userData = [
  {
    "email": "emily@email.com",
    "name": "Emily",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
