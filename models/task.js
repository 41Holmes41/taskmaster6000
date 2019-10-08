var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Group = require('../models/group');

var taskSchema = new mongoose.Schema({
    name: String,
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    available: {
        type: Boolean,
        default: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completionDate: Date,
    postedDate : Date,
    postDuration : String,
    timeUntilCompletionDate: String,
    completedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    points: {
        type: Number,
        default: 1
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);