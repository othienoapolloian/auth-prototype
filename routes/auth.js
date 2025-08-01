const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await new User({ username, password: hash }).save();
    res.redirect('/login');
  } catch (err) {
    console.error('[REGISTRATION ERROR]', err);
    res.status(500).send(`Registration error: ${err.message}`);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send('Login error');
  }
});

// [GET] /auth/users — See all registered users (for testing/debug only)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Get all users, exclude password field
    res.json(users);
  } catch (err) {
    console.error('[GET /users ERROR]', err);
    res.status(500).send('Error fetching users');
  }
});

//update login route to save session
req.session.user = {
  id: user._id,
  username: user.username,
  isAdmin: user.isAdmin,
};

//create admin dashboard route
router.get('/admin', adminAuth, async (req, res) => {
  const users = await User.find({}, '-password');
  res.render('admin', { users, admin: req.session.user.username });
});


module.exports = router;