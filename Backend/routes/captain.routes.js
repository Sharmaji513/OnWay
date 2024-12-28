const express = require('express');
const { captainValidateRegister,captainValidatelogin } = require('../validations/captain.validations');
const captainController = require('../controllers/captain.controller');
const router = express.Router();


router.post('/register', captainValidateRegister, captainController.registerCaptain);
router.post('/login', captainValidatelogin, captainController.loginCaptain);


module.exports = router;
