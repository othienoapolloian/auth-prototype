const mongoose = require ('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User',UserSchema)