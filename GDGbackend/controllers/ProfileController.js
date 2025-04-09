const User = require("../models/UserModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
// Fetch user profile by ID
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Failed to fetch user' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, address, gender, age } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { firstName, lastName, phoneNumber, address, gender, age },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
};

// Upload profile picture
const uploadProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'profile_pictures',
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { profilePicture: uploadResult.secure_url },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    fs.unlinkSync(req.file.path); // Delete the file from the server after upload
    res.status(200).json({ message: 'Profile picture updated', profilePicture: uploadResult.secure_url });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ message: 'Failed to upload profile picture' });
  }
};

module.exports = { getUserProfile, updateUserProfile, uploadProfilePicture };