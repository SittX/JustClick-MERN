const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favouriteMoviesSchema = new Schema({
  title: { type: String, default: "" },
  original_title: { type: String },
  poster_path: { type: String },
  release_date: { type: String },
  vote_average: { type: Number },
});
const favourites = mongoose.model("favouriteMovies", favouriteMoviesSchema);
module.exports = favourites;
