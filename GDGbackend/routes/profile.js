const express = require('express'); 
const authMiddleware =require ('../middlewares/authmiddleware')
const router = express.Router(); 
const upload = require("../utils/multer"); 
// const {forgotPassword,verifyOTP,resetPassword,resendOTP} = require('../controllers/authController');
const {updateUserProfile,getUserProfile} = require('../controllers/ProfileController');

router.get('/api/user/:id', authMiddleware, getUserProfile);
router.put('/api/user/:id', authMiddleware, updateUserProfile);
router.post('/api/user/:id/upload-profile-picture', authenticateToken, upload.single('profilePicture'), uploadProfilePicture);

module.exports = router; 