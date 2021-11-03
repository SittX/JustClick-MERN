const express = require("express");
const router = express.Router();
const {
  welcomePage,
  moviePage,
  animePage,
  supportPage,
  anime_result,
  movie_result,
  movie_details,
} = require("../src/controller/controller");
router.get("/", welcomePage);
router.get("/movie", moviePage);
router.get("/anime", animePage);
router.get("/support", supportPage);
router.post("/anime", anime_result);
router.post("/movie", movie_result);
router.post("/movie_details", movie_details);
module.exports = router;
