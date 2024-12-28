const { body } = require("express-validator");


module.exports.captainValidateRegister = [

 body("fullname.firstname").isString().notEmpty().withMessage("Firstname is required"),
  body("fullname.lastname").isString().notEmpty().withMessage("Lastname is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body("vehicle.color").isString().notEmpty().withMessage("Vehicle color is required"),
  body("vehicle.plate").isString().notEmpty().withMessage("Vehicle plate is required"),
  body("vehicle.capacity").isInt({ min: 1 }).withMessage("Vehicle capacity must be a positive number"),
  body("vehicle.vehicleType").isString().notEmpty().withMessage("Vehicle type is required"),
];

module.exports.captainValidatelogin = [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]