//const User = require('../models/user');
const Task = require('../models/task');
const Group = require('../models/group');
//const Time = require('../time')

module.exports = {
  create,
  edit
};

async function edit(req, res) {
  try {
    await Task.findByIdAndUpdate(req.body.taskId, req.body);
    res.status(200).json({ok: true})
  } catch (err) {
    console.log("task save error in tasks controller: edit task", err)
  }
}

async function create(req, res) {
  const task = new Task(req.body)
  task.creator = req.user._id;
  task.posted = new Date();
  try {
    await task.save();
    await Group.findByIdAndUpdate(req.body.groups, {$push:{availableTasks:task.id}})
    res.status(200).json({ok: true})
  } catch (err) {
    console.log("task save error in tasks controller", err)
  }
}
