const { Post } = require('../models');

const postData = [
  {
    "title": "MS Access, can you hear me?",
    "content": "It's been a good ride, but many developers have said goodbye to Microsoft Access. What do you think? Gone too soon?",
    "user_id": 1
  },
  {
      "title": "Who's the best web developer?",
      "content": "We're here to find out - comment below!",
      "user_id": 1
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;