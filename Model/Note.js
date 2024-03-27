const mongoose = require('mongoose')
const Schema = new mongoose.Schema({

   ID : {
      type: String,
      require: true,
      unique: true
   },

   Title: {
      type: String,
      require: true,
   },

   CreateDate: {
      type: String,
      require: true
   },

   Content: {
      type: String,
      require: true
   },

   Status: {
      type: String,
      require: true
   },

   Deadline: {
      type: String,
      require: true
   }

})

const Model = mongoose.model('Note', Schema)
module.exports = Model