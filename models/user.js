var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var pointsByGroupSchema = new mongoose.Schema({
    groupId: String,
    points: Number
})


var userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    googleId: String,
    avatar: String,
    activeGroup: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    pointsByGroup: [pointsByGroupSchema],
    currentPoints: {
        type: Number,
        default: 1
    },
    totalPoints: {
        type: Number,
        default: 1
    },
    currentTasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    completedTasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, {
    timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
    // this will be set to the current document
    const user = this;
    if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
})

userSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' represents the document that you called comparePassword on
    bcrypt.compare(tryPassword, this.password, cb)  };

module.exports = mongoose.model('User', userSchema);