const express = require("express")
const router = express.Router(); 
const usersController = require('../controllers/usersController')

router.get('/', usersController.usersController)

module.exports = router;