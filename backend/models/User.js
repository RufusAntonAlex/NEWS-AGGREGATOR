const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  newsPreference: { type: String, required: true, default: 'General' },
  createdAt: { type: Date, default: Date.now }
});

// Create and export the User model based on the schema
module.exports = mongoose.model('User', userSchema);
