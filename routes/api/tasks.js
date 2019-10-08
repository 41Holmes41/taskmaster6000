var express = require('express');
var router = express.Router();
//var passport = require('passport');
var tasksCtlr = require('../../controllers/tasks');



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/create', tasksCtlr.create);
router.put('/edit', tasksCtlr.edit);

module.exports = router;