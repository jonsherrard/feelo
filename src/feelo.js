const twitter = require('./twitter');
const config = require('./config');

const chalk = require('chalk');

twitter
  .search(config.twitter.keyphrase, 5)
  .then(result =>
    result.data.statuses.map(s => {
      console.log('screen_name:', chalk.yellow(s.user.screen_name));
      console.log('tweet:', chalk.cyan(s.text));
    })
  )
  .catch(err => {
    throw new Error(err);
  });
