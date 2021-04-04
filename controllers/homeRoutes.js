const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll({
          include: [
              {   model: User,
                  attributes: ['name']
              },
          ],
      });
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('homepage', { 
          posts,
          logged_in: req.session.logged_in
       });
  } catch (err) {res.status(500).json(err);
  }
});

router.get('/post', async (req, res) => {
  let postData = await Post.findAll({
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render('post', { posts, logged_in: req.session.logged_in});
});

router.get('/dashboard', withAuth, async (req, res) => {
  const commentData = await Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ['comment', 'user_id', 'post_id','date_created'],
      },
    ]
  });

  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
      {
        model: Comment,
        attributes: ['comment', 'user_id', 'post_id', 'date_created'],
      },
    ]
  }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  const comments = commentData.map((comment) => comment.get({ plain: true}));
  console.log(posts);
  res.render('dashboard', { posts, logged_in: req.session.logged_in, comments});
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
    title: "Login"
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
});

module.exports = router;