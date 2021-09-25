const { default: axios } = require("axios");

//fetch API function
fetch = async (uri) => {
  const response = await axios(uri);
  const data = await response.data;
  return data;
};
exports.fetch_movie_api = (query) => {
  const uri = ` http://www.omdbapi.com/?s=${query}&apikey=882ab243`;
  const response = fetch(uri);
  return response;
};
exports.fetch_anime_api = (query) => {
  const uri = `https://api.jikan.moe/v3/search/anime?q=${query}&limit=5`;
  const response = fetch(uri);
  return response;
};
