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
  gifs: ['static/hug_0.gif', 'static/hug_1.gif', 'static/hug_2.gif' ]
};
