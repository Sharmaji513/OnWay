const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

// Register Captain
module.exports.registerCaptain = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const captain = await captainService.createCaptain({
      fullname,
      email,
      password,
      vehicle,
    });

    const token = captain.generateAuthToken();

    return res.status(201).json({ token, captain });
  } catch (error) {
    console.error("Error in registerCaptain:", error.message);
    next(error);
  }
};


//login captain
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select('+password');

  if (!captain) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = captain.generateAuthToken();

  res.cookie('token', token);

  res.status(200).json({ token, captain });
}



