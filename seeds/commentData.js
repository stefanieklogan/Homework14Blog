const { Comment } = require('../models');

const commentData = [
  {
    "comment": "I agree."
  },
  {
      "comment": "There are great developers everywhere."
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

