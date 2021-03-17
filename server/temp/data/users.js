const mongoose = require('mongoose');
const { Types: { ObjectId } } = mongoose;

const users = [
  {
    _id: ObjectId("604d15b07cea912dcc68117d"),
    firstname: "John",
    lastname: "Smith",
    avatar: null,
    email: "johnsmith@yahoo.com",
    password: "********",
    role: 'user'
  },
  {
    _id: ObjectId("604d15b07cea912dcc68117e"),
    firstname: "John",
    lastname: "Doe",
    avatar: null,
    email: "john@yahoo.com",
    password: "********",
    role: 'user'
  }
];

module.exports = users;
