const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', async(req, res) => {
  if (!req.session.logged_in) {
    res.status(400).json({ logged_in: false, message: 'Please log in first' });
    return;
  }

  try {
    let newPost = {
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    }
    let post = await Post.create(newPost);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {

    const updatedPost = {
      title: req.body.title,
      content: req.body.post,
      user_id: req.session.user_id
    }

    const revivedPost = await Post.update( updatedPost, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  
  if (!postData) {
    res.status(404),json({ message: 'No post found with this id!'});
    return;
  }

  res.status(200),json(revivedPost);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete('/:id', withAuth, async (req, res) => {
  console.log("user:" + req.session.user_id);
  console.log(req.params.id);

  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;