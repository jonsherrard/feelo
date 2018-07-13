const axios = require('axios');
const config = require('./config');

const constructEndpoint = id =>
  `https://api.giphy.com/v1/gifs/${id}?api_key=${config.giphy.api_key}`;

const getGifUrl = async () => {
  let response;

  const randomIndex = Math.floor(Math.random() * config.giphy.ids.length);
  const gifId = config.giphy.ids[randomIndex];

  try {
    response = await axios.get(constructEndpoint(gifId));
  } catch (e) {
    throw new Error(e);
  }

  return response.data.data.images.original.url;
};

module.exports = {
  getGifUrl
};
