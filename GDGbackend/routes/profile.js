const express = require('express'); 
const authMiddleware =require ('../middlewares/authmiddleware')
const router = express.Router(); 
const upload = require("../utils/multer"); 
// const {forgotPassword,verifyOTP,resetPassword,resendOTP} = require('../controllers/authController');
const {updateUserProfile,getUserProfile,uploadProfilePicture} = require('../controllers/ProfileController');

router.get('/get-profile/:userId', authMiddleware, getUserProfile);
router.put('/edit-profile/:userId', authMiddleware, updateUserProfile);
router.put('/upload-profile-picture/:userId', authMiddleware, upload.single('profilePicture'), uploadProfilePicture);

module.exports = router; 