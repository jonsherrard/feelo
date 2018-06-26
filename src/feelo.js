const bot = require('./bot');
const configTwitter = require('./config').twitter;

const chalk = require('chalk');

bot()
  .get('search/tweetss', { q: `"${configTwitter.keyphrase}"`, count: 5 })
  .then(result =>
    result.data.statuses.map(s => {
      console.log('screen_name:', chalk.yellow(s.user.screen_name));
      console.log('tweet:', chalk.cyan(s.text));
    })
  )
  .catch(err => {
    throw new Error(err);
  });
