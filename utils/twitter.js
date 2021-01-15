const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const tweet = async (data) => {
  try {
    const status =  `Nos Faltan ${data.daysToHerd} día(s) para tener imnunidad en México (70% de la población vacunada)`;
    const result = await twitterClient.tweets.statusesUpdate({ status });
  
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { tweet };
