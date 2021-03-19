const seedBlog = require('./blogData.json');
const seedUser = require('./userData.json');
const seedComment = require('./commentData.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedBlog();
  console.log('\n----- BLOG SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENT SEEDED -----\n');

  process.exit(0);
};

seedAll();