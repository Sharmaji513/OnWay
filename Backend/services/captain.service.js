const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
  try {
    // Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainModel.create({
      fullname,
      email,
      password: hashedPassword,
      vehicle,
    });

    return captain;
  } catch (error) {
    console.error("Error in createCaptain:", error.message);
    throw new Error("Failed to create captain");
  }
};
