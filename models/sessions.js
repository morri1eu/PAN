const mongoose = require("mongoose");
const validators = require("mongoose-validators");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const sessionsSchema = new Schema({
 
  creator: {
    type: String,
    trim: true,
    required: true
},

  creatorID: {
    type: String,
    trim: true,
    required: true
  },

  sessionDesc:{
      type: String,
      trim: true,
      required: true
  },

  helper: {
    type: String,
    trim: true   
  },

  helperID: {
    type: String,
    trim: true  
  },

  sessionsEnd: {
    type: Date
  },

  ended:{
    type: Boolean,
    default: false
  }

});

const Sessions = mongoose.model("Sessions", sessionsSchema);

module.exports = Sessions;
