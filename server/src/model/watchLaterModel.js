const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favouriteMoviesSchema = new Schema({
  adult: { type: Boolean },
  backdrop_path: { type: String, required: true },
  genre_ids: [Number],
  id: { type: Number },
  original_language: { type: String },
  original_title: { type: String },
  overview: { type: String, required: true },
  popularity: Number,
  poster_path: { type: String, required: true },
  release_date: { type: String },
  title: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

const watchLaterMovies = mongoose.model("watchLaterMovies", watchLaterSchema);
module.exports = watchLaterSchema;
