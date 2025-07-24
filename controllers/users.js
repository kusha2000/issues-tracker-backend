const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @route   GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = {
  getUsers
};