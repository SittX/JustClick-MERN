const express = require("express");
const router = express.Router();
const controller = require("../src/controller/controller");
router.get("/", controller.welcomePage);
router.get("/movie", controller.moviePage);
router.get("/anime", controller.animePage);
router.get("/k_series", controller.k_seriesPage);

router.post("/anime", controller.anime_result);
router.post("/movie", controller.movie_result);
module.exports = router;
