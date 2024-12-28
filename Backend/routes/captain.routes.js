const express = require('express');
const { captainValidateRegister,captainValidatelogin } = require('../validations/captain.validations');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();


// console.log(captainController);


router.post('/register', captainValidateRegister, captainController.registerCaptain);
router.post('/login', captainValidatelogin, captainController.loginCaptain);
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);
router.get('/logout',  captainController.logoutCaptain);

module.exports = router;
