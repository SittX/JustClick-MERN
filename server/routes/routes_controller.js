const express = require("express");
const router = express.Router();
const {
  getTrending,
  getPopularMovies,
  searchMovies,
  searchAnime,
  getNextPage,
} = require("../src/controller/controller");
//for welcome page
router.get("/getTrending/:page", getTrending);
//for movie page
router.get("/movie", getPopularMovies);
router.get("/search/movie/:title", searchMovies);
router.get("/search/movie/:title/:page", getNextPage);
router.get("/anime/search/:title", searchAnime);
module.exports = router;
