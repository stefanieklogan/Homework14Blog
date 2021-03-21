const router = require('express').Router();
const blogRoute = require('./blogRoute');
const blogRoute = require('./commentRoute');
const blogRoute = require('./userRoute');

router.use('/blog', blogRoute);
router.use('/comment', commentRoute);
router.use('/user', userRoute);

module.exports = router;