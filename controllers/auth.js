const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const asyncHandler = require('express-async-handler');

// @route   POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const validRoles = ['user', 'admin'];
    const userRole = role && validRoles.includes(role) ? role : 'user';

    const user = await User.create({
        name,
        email,
        password,
        role: userRole
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @route   POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @route   GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = {
    registerUser,
    loginUser,
    getMe
};