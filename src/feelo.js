const twitter = require('./twitter');
const config = require('./config');

const chalk = require('chalk');

twitter
  .search(config.twitter.keyphrase, 5)
  .then(twitter.getScreenNames)
  .then(sn => sn.map(s => console.log(chalk.cyan(s))))
  .catch(err => {
    throw new Error(err);
  });
