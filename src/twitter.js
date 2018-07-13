const Twit = require('twit');
const config = require('./config');

const twitter = new Twit({
  consumer_key: config.twitter.keys.consumer_key,
  consumer_secret: config.twitter.keys.consumer_secret,
  access_token: config.twitter.keys.access_token,
  access_token_secret: config.twitter.keys.access_token_secret
});

const search = (query, count) => {
  return twitter.get('search/tweets', { q: `"${query}"`, count });
};

const getScreenNames = response => {
  return response.data.statuses.map(s => s.user.screen_name);
};

module.exports = {
  search,
  getScreenNames
};
