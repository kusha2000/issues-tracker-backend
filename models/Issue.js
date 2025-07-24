const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'testing', 'resolved', 'closed'],
        default: 'open'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical'],
        default: 'medium'
    },
    severity: {
        type: String,
        enum: ['minor', 'moderate', 'major', 'blocker'],
        default: 'moderate'
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    assignedTo: {
        type: String,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

issueSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Issue', issueSchema);