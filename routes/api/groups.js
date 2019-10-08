const express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/groups');

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/create', groupsCtrl.create);
router.get('/:id', groupsCtrl.getInfo);




module.exports = router;