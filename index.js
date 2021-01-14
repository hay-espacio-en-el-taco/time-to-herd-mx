const { getDaysToHerd } = require('./utils/covid-data');



const app = async () => {
  console.log('start program')
 const daysToHerd = await getDaysToHerd();
 console.log(daysToHerd);
}

app();