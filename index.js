const { getDaysToHerd } = require('./utils/covid-data');
const { tweet } = require('./utils/twitter');



const app = async () => {
  console.info('start program')
 const daysToHerd = await getDaysToHerd();
 console.info(daysToHerd);
 const result = await tweet(daysToHerd);
 console.info(result);
}

app();