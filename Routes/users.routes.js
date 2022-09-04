 const express = require('express');
const usersControllers = require('../controller/user.controller');

const router = express.Router();

/* router
.router("/") */
router.get('/all',usersControllers.getAllUsers);
router.get("/random",usersControllers.getRandomUser);
router.post("/save",usersControllers.saveAUser);
router.patch("/update/:id",usersControllers.updateUser);
router.delete("/delete/:id",usersControllers.deleteAUser);



module.exports = router;