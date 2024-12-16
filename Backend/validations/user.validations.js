// validations/user.validation.js
const { body } = require("express-validator");

const validateRegister = [
    body('email')
        .isEmail()
        .withMessage('Invalid Email'),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

module.exports = {
    validateRegister,
};