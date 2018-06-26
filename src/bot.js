const Twit = require('twit');
const config = require('./config');

module.exports = () => {
  const bot = new Twit({
    consumer_key: config.twitter.keys.consumer_key,
    consumer_secret: config.twitter.keys.consumer_secret,
    access_token: config.twitter.keys.access_token,
    access_token_secret: config.twitter.keys.access_token_secret
  });

  return bot;
};
