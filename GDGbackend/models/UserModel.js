// UserModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true }, // Added
  gender: { type: String, required: true, enum: ["male", "female", "other"] }, // Added
 // Added as optional
  
 
  profilePicture: { type: String, default: null },
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  emailVerificationTokenExpires: { type: Date },
  isMember: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;