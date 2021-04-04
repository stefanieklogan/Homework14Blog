const { Comment } = require('../models');

const commentData = [
  {
    "comment": "I agree.",
    "post_id": 2,
    "user_id": 1
  },
  {
      "comment": "There are great developers everywhere.",
      "post_id": 1,
      "user_id": 1
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

