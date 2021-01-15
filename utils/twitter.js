const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const tweet = async (data) => {
  try {
    const years = Math.trunc(data.daysToHerd / 365);
    const yearsText = years > 0 ? `o aprox ${years} año(s) ` : '';
    const status =  `Nos Faltan ${data.daysToHerd} día(s) ${yearsText}para tener imnunidad en México (70% de la población vacunada) #Covid_19mx #COVID19`;
    const result = await twitterClient.tweets.statusesUpdate({ status });
  
    return result;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { tweet };
