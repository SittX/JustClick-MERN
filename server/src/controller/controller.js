const axios = require("axios");

exports.getTrending = (req, res) => {
  const current_page = req.params.page;
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?page=${current_page}&api_key=91ae970c4115cf1c6aea96715a298e8a`
    )
    .then((response) => {
      res.send(response.data);
    });
};

exports.getPopularMovies = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=91ae970c4115cf1c6aea96715a298e8a`
    )
    .then((response) => {
      res.send(response.data);
    });
};
exports.searchMovies = (req, res) => {
  const title = req.params.title;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=91ae970c4115cf1c6aea96715a298e8a&language=en-US&query=${title}&include_adult=false`
    )
    .then((response) => {
      res.send(response.data);
    });
};
exports.searchAnime = (req, res) => {
  const title = req.params.title;
  axios
    .get(`https://api.jikan.moe/v3/search/anime?q=${title}`)
    .then((response) => res.send(response.data.results));
};
