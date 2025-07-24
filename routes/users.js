const express = require('express');
const { getUsers } = require('../controllers/users');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.route('/')
  .get(getUsers);

module.exports = router;