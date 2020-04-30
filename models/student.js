const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: Number, required: true }
}, {
  _id: false,
  collection: 'student'
})

module.exports = mongoose.model('Student', studentSchema)