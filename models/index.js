const Comment = require('./Comment');
const Blog = require('./Blog');
const User = require('./User');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Blog.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };
