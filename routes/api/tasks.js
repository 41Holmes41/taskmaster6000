var express = require('express');
var router = express.Router();
//var passport = require('passport');
var tasksCtlr = require('../../controllers/tasks');


router.post('/newtask', tasksCtlr.newTask);


module.exports = router;