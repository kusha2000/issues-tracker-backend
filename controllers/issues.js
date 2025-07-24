const Issue = require('../models/Issue');
const asyncHandler = require('express-async-handler');

// @route   GET /api/issues
const getIssues = asyncHandler(async (req, res) => {
  const { status, priority, search } = req.query;

  let query = {};

  if (status) {
    query.status = status;
  }

  if (priority) {
    query.priority = priority;
  }

  if (req.query.severity) {
    query.severity = req.query.severity;
  }

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  const issues = await Issue.find(query)
    .populate('createdBy', 'name email')
    .populate('assignedTo', 'name email')
    .sort('-createdAt');

  res.json(issues);
});

// @route   GET /api/issues/:id
const getIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id)
    .populate('createdBy', 'name email')
    .populate('assignedTo', 'name email');

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  res.json(issue);
});

// @route   POST /api/issues
const createIssue = asyncHandler(async (req, res) => {
  const { title, description, priority, severity, assignedTo } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error('Please add a title and description');
  }

  const issue = await Issue.create({
    title,
    description,
    priority,
    severity,
    createdBy: req.user.id,
    assignedTo: req.user.id
  });

  res.status(201).json(issue);
});

// @route   PUT /api/issues/:id
const updateIssue = asyncHandler(async (req, res) => {
  let issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  if (issue.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized to update this issue');
  }

  issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.json(issue);
});

// @route   DELETE /api/issues/:id
const deleteIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  if (issue.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized to delete this issue');
  }

  await issue.remove();

  res.json({ success: true });
});

module.exports = {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue
};