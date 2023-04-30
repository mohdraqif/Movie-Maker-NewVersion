const mongoose = require('mongoose')

const mongoSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String
})

module.exports = new mongoose.model('MongoMovieModel', mongoSchema)