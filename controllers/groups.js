const Group = require('../models/group');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  create,
  getInfo
};

async function create(req, res) {
  const group = new Group(req.body)
  group.creator = req.user._id;
  group.members.push(req.user._id);
  try {
    await group.save();
    await User.findByIdAndUpdate(req.user._id, {$push: { groups: group._id }})
    res.status(200).json({ok: true})
  } catch (err) {
    console.log("group save error in groups controller", err)
  }
}

async function getInfo(req, res) {
  try {
    const group = await Group.findById(req.params.id);
    await group.populate('availableTasks').execPopulate()
      res.json({group})
  } catch(err){
    res.status(400).json(err);
  }
}
