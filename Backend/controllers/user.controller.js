const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
    try {
        
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract and validate input
        const { fullname, email, password } = req.body;

        // Check for missing fields
        if (!fullname || !fullname.firstname || !fullname.lastname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required: firstname, lastname, email, and password.",
            });
        }

        // Check if email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use." }); // 409 Conflict
        }

        // Hash password
        const hashedPassword = await userModel.hashPassword(password);

        // Create the user
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
        });

        // Generate token
        const token = user.generateAuthToken();

    
        res.status(201).json({ token, user });
    } catch (error) {
        next(error); 
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find user with email
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate token
        const token = user.generateAuthToken();

     
        res.status(200).json({message: "Login successful", token, user });

    } catch (error) {
        next(error);
    }
};

