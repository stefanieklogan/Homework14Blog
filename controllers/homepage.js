const router = require('express').Router();
// const path = require('path');
// const { Blog, User } = require('../models');
// const withAuth = require('../utils/auth');

const blogs = [
  { blog_title: 'Blog Title One',
    blog_content: 'Here is blog one content.',
    blog_date_created: '1/1/2020',
  },
  { blog_title: 'Blog Title TWO',
  blog_content: 'Here is blog two content.',
  blog_date_created: '1/1/2020',
},
];

router.get('/', async (req, res) => {
  res.render('../views/layouts/main', { blogs });
});

router.get('/dashboard', async (req, res) => {
  res.render('../views/dashboard');
});

router.get('/blog/:num', async (req, res) => {
  return res.render('blog', blogs[req.params.num - 1]);
});

router.get('/login', async (req, res) => {
  return res.render('../views/login');
});

// router.get('/', async (req, res) => {
//   try {
//     // Get all blogs and JOIN with user data
//     const blogData = await Blog.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));

//     res.render('homepage', { 
//       blogs, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const blog = blogData.get({ plain: true });

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;