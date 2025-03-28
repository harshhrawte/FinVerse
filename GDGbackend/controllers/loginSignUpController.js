// authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const cloudinary = require("../config/cloudinary");

const fs = require("fs");
const transporter = require("../utils/nodemailer");

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      age,         
      gender,
      email,
      password,
      confirmPassword,
      
    } = req.body;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address ||
      !age ||
      !gender 
    ) {
      return res.status(400).json({ message: "Required data missing" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let profilePicture = null;
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "profile_pictures",
      });
      profilePicture = {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      };
      fs.unlinkSync(req.file.path);
    }

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      address,
      age: Number(age), // Ensure it's saved as a number
      gender,
      profilePicture: profilePicture?.url,
      isEmailVerified: false,
    });

    const verificationCode = generateVerificationCode();
    const tokenExpiration = new Date(Date.now() + 15 * 60 * 1000);

    newUser.emailVerificationToken = verificationCode;
    newUser.emailVerificationTokenExpires = tokenExpiration;
    await newUser.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: "Email Verification",
      text: `Your verification code is: ${verificationCode}. Please enter this code to verify your email.`,
    };
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Signup successful. Please check your email for verification.",
      data: { email: newUser.email },
      publicId: profilePicture?.publicId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to upload profile",
      error: error.message,
    });
  }
};

// Other functions remain unchanged
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    if (!user.isEmailVerified) {
      return res.status(400).json({ message: "Email not verified. Please verify your email to log in." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const accessToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.firstName + " " + user.lastName,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login successful.",
      userId: user._id,
      token: accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = newHashedPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { email, verificationCode } = req.body;
    const user = await User.findOne({ email }).select(
      "+emailVerificationToken +emailVerificationTokenExpires"
    );

    if (!user) return res.status(400).json({ success: false, message: "User not found." });
    if (user.isEmailVerified) return res.status(400).json({ success: false, message: "Email already verified." });

    const isTokenValid = user.emailVerificationToken === verificationCode;
    const isTokenExpired = user.emailVerificationTokenExpires < new Date();

    if (!isTokenValid || isTokenExpired) {
      return res.status(400).json({ success: false, message: "Invalid or expired verification code." });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpires = undefined;
    await user.save();
    res.status(200).json({ success: true, message: "Email verified successfully." });

  } catch (error) {
    res.status(500).json({ 
   success: false, message: error.message });
  }
};

module.exports = { signup, login, changePassword, verifyEmail }; 