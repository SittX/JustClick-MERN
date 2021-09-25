const model = require("../model/fetchAPI");
exports.welcomePage = (req, res) => {
  res.render("index");
};
exports.moviePage = (req, res) => {
  res.render("movie");
};
exports.animePage = (req, res) => {
  res.render("anime");
};

exports.movie_result = (req, res) => {
  // console.log(req.body);
  var query = req.body.movie_name;
  model
    .fetch_movie_api(query)
    .then((data) => {
      var movies = data.Search;
      res.render("movie_result", { movies });
      localStorage.setItem("imdbID", movies.imbdID);
      // console.log(movies);
    })
    .catch((err) => console.error(err));
};
exports.anime_result = (req, res) => {
  // console.log(req.body);
  var query = req.body.anime_name;
  model
    .fetch_anime_api(query)
    .then((data) => {
      var animes = data.results;
      res.render("anime_result", { animes });
      console.log(animes);
    })
    .catch((err) => console.error(err));
};
exports.k_seriesPage = (req, res) => {
  res.render("k_series");
};
