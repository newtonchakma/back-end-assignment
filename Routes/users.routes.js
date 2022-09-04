 const express = require('express');
const usersControllers = require('../controller/user.controller');

const router = express.Router();

/* router
.router("/") */
router.get('/all',usersControllers.getAllUsers);
router.get(("/random"),usersControllers.getRandomUser);



module.exports = router;