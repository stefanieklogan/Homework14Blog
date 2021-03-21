const { Blog } = require('../models');

const blogData = [
  {
    "title": "MS Access, can you hear me?",
    "content": "It's been a good ride, but many developers have said goodbye to Microsoft Access. What do you think? Gone too soon?"
  },
  {
      "title": "Who's the best web developer?",
      "content": "We're here to find out - comment below!"
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;