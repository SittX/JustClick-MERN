const axios = require("axios");
const { response } = require("express");
const favourites = require("../model/favouriteMovies");
exports.getTrending = (req, res) => {
  const current_page = req.params.page;
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?page=${current_page}&api_key=${process.env.API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    });
};

exports.getPopularMovies = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    });
};
exports.searchMovies = (req, res) => {
  const title = req.params.title;
  const page = req.params.page;
  console.log(page);
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${title}&include_adult=false`
    )
    .then((response) => {
      res.send(response.data);
    });
};
exports.getNextPage = (req, res) => {
  console.log("nextpage", req.params.page);
  const currentPage = req.params.page;
  const query = req.params.title;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
    )
    .then((response) => res.send(response.data));
};
exports.searchAnime = (req, res) => {
  const title = req.params.title;
  axios
    .get(`https://api.jikan.moe/v3/search/anime?q=${title}`)
    .then((response) => res.send(response.data.results));
};
exports.addToFavourite = async (req, res) => {
  const movie = req.body;
  const response = await favourites.create(movie);
  res.send("Added to the Favourite!");
};

exports.getFavourite = async (req, res) => {
  const response = await favourites.find({});
  res.send(response);
};

exports.deleteFavourite = async (req, res) => {
  const { id } = req.body;
  const response = await favourites.deleteOne({ _id: id });
  res.send(response);
};
