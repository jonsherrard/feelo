require('dotenv').config();

module.exports = {
  twitter: {
    keys: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    },
    keyphrase: process.env.TWITTER_KEYPHRASE
  },
  giphy: {
    api_key: process.env.GIPHY_API_KEY,
    ids: [process.env.GIPHY_GIF_ID_1, process.env.GIPHY_GIF_ID_2]
  }
};
