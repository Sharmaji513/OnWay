const express =require('express');
const { validateRegister ,validateLogin } = require('../validations/user.validations');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register',validateRegister, userController.registerUser )
router.post('/login' , validateLogin , userController.loginUser)


module.exports = router;