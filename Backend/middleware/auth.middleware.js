const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  try {

    // get token from cookies or authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log("Token:", token);

    // If no token, stop  execution
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    
    req.user = user;

    
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);

    // Handle token verification or other errors
    return res.status(401).json({ message: "Unauthorized" });
  }
};


module.exports.authCaptain = async (req, res, next) => {


  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
  
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const captain = await captainModel.findById(decoded._id)
      req.captain = captain;

      return next()
  } catch (err) {
      console.log(err);

      res.status(401).json({ message: 'Unauthorized' });
  }
}