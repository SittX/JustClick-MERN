const axios = require("axios");

//fetch API function
fetch = async (uri) => {
  const response = await axios(uri);
  const data = await response.data;
  return data;
};
exports.fetch_movie_api = (query) => {
  const uri = ` http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`;
  const response = fetch(uri);
  return response;
};
exports.movie_details = (id) => {
  console.log(id);
  const uri = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}`;
  const data = fetch(uri);
  return data;
};
exports.fetch_anime_api = (query) => {
  const uri = `https://api.jikan.moe/v3/search/anime?q=${query}`;
  const response = fetch(uri);
  return response;
};
