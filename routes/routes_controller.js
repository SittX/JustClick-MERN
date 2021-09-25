const express = require("express");
const router = express.Router();
const controller = require("../src/controller/controller");
router.get("/", controller.welcomePage);
router.get("/movie", controller.moviePage);
router.get("/anime", controller.animePage);

router.post("/anime", controller.anime_result);
router.post("/movie", controller.movie_result);

router.post("/movie_details", controller.movie_details);
module.exports = router;
