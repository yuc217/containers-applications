const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,

  versionKey: false
  
})

module.exports = mongoose.model('Todo', todoSchema)