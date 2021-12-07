const express = require("express");
const router = express.Router();
const {
  getTrending,
  getPopularMovies,
  searchMovies,
  searchAnime,
  getNextPage,
  addToFavourite,
  getFavourite,
  deleteFavourite,
} = require("../src/controller/controller");
//for welcome page
router.get("/getTrending/:page", getTrending);
//for movie page
router.get("/movie", getPopularMovies);
router.get("/search/movie/:title", searchMovies);
router.get("/search/movie/:title/:page", getNextPage);
router.get("/anime/search/:title", searchAnime);
router.post("/addToFavourite", addToFavourite);
router.get("/favourite", getFavourite);
router.delete("/favourite", deleteFavourite);
module.exports = router;
