const router = require('express').Router();
const path = require('path');
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/dashboard', withAuth, async (req, res) => {
  const blogData = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true}));
  return res.render('dashboard', {blogs} );
});

router.get('/blog/:num', async (req, res) => {
  return res.render('blog', blogs[req.params.num - 1]);
});

router.get('/login', async (req, res) => {
  return res.render('login');
});

router.get('/signup', async (req, res) => {
  res.render('signup', {
    title: "Sign Up"
  })
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', {
    title: 'login'
  });
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).redirect('/');
    });
  } else {
    res.status(404).end();
  }
  res.render('logout');
});

module.exports = router;