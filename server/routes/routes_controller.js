const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const {
  getTrending,
  getPopularMovies,
  searchMovies,
  searchAnime,
} = require("../src/controller/controller");
//for welcome page
router.get("/getTrending/:page", getTrending);
//for movie page
router.get("/movie/:page", getPopularMovies);
router.get("/search/movie/:title", searchMovies);
router.get("/anime/search/:title", searchAnime);
module.exports = router;
