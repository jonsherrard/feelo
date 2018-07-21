const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

const bot = new Twit({
  consumer_key: config.twitter.keys.consumer_key,
  consumer_secret: config.twitter.keys.consumer_secret,
  access_token: config.twitter.keys.access_token,
  access_token_secret: config.twitter.keys.access_token_secret
});

const getRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * config.gifs.length);
  return config.gifs[randomIndex];
};

bot
  .get('search/tweets', { q: `"${config.twitter.keyphrase}"`, count: 3 })
  .then(res => {
    /**
     * User Data
     */
    const userData = res.data.statuses.map(s => ({
      username: `@${s.user.screen_name}`,
      status_id: s.id_str
    }));

    userData.forEach(async u => {
      const gifPath = getRandomGif();
      const gif = fs.readFileSync(gifPath, { encoding: 'base64' });

      /**
       * Upload Media
       */
      bot.post('media/upload', { media_data: gif }, function(
        err,
        data,
        response
      ) {
        const mediaIdStr = data.media_id_string;
        const altText = 'A hug from Feelo bot.';
        const media_params = {
          media_id: mediaIdStr,
          alt_text: { text: altText }
        };

        bot.post('media/metadata/create', media_params, function(
          err,
          data,
          response
        ) {
          if (!err) {
            const params = {
              status: `${u.username}`,
              media_ids: [mediaIdStr],
              in_reply_to_status_id: u.status_id
            };

            /**
             * Tweet
             */
            bot.post('statuses/update', params, function(err, data, response) {
              console.log(data);
            });
          }
        });
      });
    });
  })
  .catch(err => {
    throw new Error(err);
  });
