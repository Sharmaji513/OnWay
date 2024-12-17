// validations/user.validation.js
const { body } = require("express-validator");

module.exports.validateRegister = [
    body("fullname.firstname").notEmpty().withMessage("First name is required."),
    body("fullname.lastname").notEmpty().withMessage("Last name is required."),
    body("email").isEmail().withMessage("A valid email is required."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
];


module.exports.validateLogin = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];



