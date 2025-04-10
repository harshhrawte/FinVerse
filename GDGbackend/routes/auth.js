const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authmiddleware');
const { 
  signup, 
  login, 
  changePassword, 
  verifyEmail 
} = require('../controllers/loginSignUpController');
const {
  forgotPassword,
  verifyOTP,
  resetPassword,
  resendOTP
} = require('../controllers/authController');
const upload = require("../utils/multer");
const rateLimit = require('express-rate-limit');
const { body } = require('express-validator');

// Rate limiting for security
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many attempts, please try again later'
});

// Input validation middleware
const validateSignup = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('phoneNumber').isMobilePhone()
];

const validateLogin = [
  body('email').isEmail().normalizeEmail(),
  body('password').exists()
];

// Routes
router.post('/signup', 
  upload.single('profilePicture'),
  validateSignup,
  signup
);

router.post('/login', 
  authLimiter,
  validateLogin,
  login
);

router.post('/change-password', 
  authMiddleware, // Requires authenticated user
  body('newPassword').isLength({ min: 8 }),
  changePassword
);

router.post('/verify-email', 
  body('verificationCode').isLength({ min: 6, max: 6 }),
  verifyEmail
);

// Password recovery flow
router.post('/forgot-password', 
  authLimiter,
  body('email').isEmail().normalizeEmail(),
  forgotPassword
);

router.post('/verify-otp',
  authLimiter,
  body('otp').isLength({ min: 6, max: 6 }),
  verifyOTP
);

router.post('/reset-password',
  authLimiter,
  body('newPassword').isLength({ min: 8 }),
  resetPassword
);

router.post('/resend-otp',
  authLimiter,
  body('email').isEmail().normalizeEmail(),
  resendOTP
);

module.exports = router;