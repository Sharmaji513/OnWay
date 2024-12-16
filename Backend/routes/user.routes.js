const express =require('express');
const { validateRegister } = require('../validations/user.validations');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register',validateRegister, userController.registerUser )


module.exports = router;