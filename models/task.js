var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Group = require('../models/group');

var taskSchema = new mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Task', taskSchema);