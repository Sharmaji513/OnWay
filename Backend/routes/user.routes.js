const express =require('express');
const { validateRegister ,validateLogin } = require('../validations/user.validations');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router();

router.post('/register',validateRegister, userController.registerUser )
router.post('/login' , validateLogin , userController.loginUser)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

module.exports = router;