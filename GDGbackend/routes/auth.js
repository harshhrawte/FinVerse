const express = require('express'); 
const authMiddleware =require ('../middlewares/authmiddleware')
const router = express.Router(); 
const { signup, login, changePassword, verifyEmail } = require('../controllers/loginSignUpController');
const upload = require("../utils/multer"); 
const {forgotPassword,verifyOTP,resetPassword,resendOTP} = require('../controllers/authController');
// const {updateProfile,getProfile} = require('../controllers/ProfileController');



router.post('/signup', upload.single('profilePicture') ,signup); 
router.post('/login', login); 
router.post('/change-password', changePassword);
router.post('/verify-email', verifyEmail); 


router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);
router.post('/resend-otp', resendOTP);

module.exports = router; 