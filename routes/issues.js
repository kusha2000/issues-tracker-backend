const express = require('express');
const {
    getIssues,
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
} = require('../controllers/issues');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(protect, getIssues)
    .post(protect, createIssue);

router.route('/:id')
    .get(protect, getIssue)
    .put(protect, updateIssue)
    .delete(protect, deleteIssue);

module.exports = router;