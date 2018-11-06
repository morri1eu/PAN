const mongoose = require("mongoose");
const validators = require("mongoose-validators");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let usersSchema = new Schema({
 
  // usersname: {
  //   type: String,
  //   trim: true,
  //   required: "usersname is Required",
  //   unique: true
  // },

  firstName: {
    type: String,
    trim: true,
    required: "First name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is Required"
  },

  middleInitial: {
    type: String,
    trim: true,
    validate: [
      function(input) {
        return input.length <= 1;
      },
      "Enter only One letter for middle initial."
    ]
  },
  
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    unique: true
  },

  email: {
    type: String,
    trim: true,
    validate: validators.isEmail()
  },

  exp: {
    type: String,
    trim: true
  },

});

// Execute before each users.save() call
usersSchema.pre('save', function(callback) {
  let users = this;

  // Break out if the password hasn't changed
  if (!users.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(users.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      users.password = hash;
      callback();
    });
  });
});

usersSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const users = mongoose.model("users", usersSchema);

module.exports = users;
