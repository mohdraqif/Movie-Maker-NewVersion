const mongoModel = require('../model/model')

const resolvers = { 
  listMovies: () => {
    return mongoModel.find({})
  },
  addMovie: (args) => {
    let newMovieData = new mongoModel({
      name: args.name,
      genre: args.genre,
      year: args.year
    })
    newMovieData.save()
    return newMovieData
  }
};

module.exports = resolvers