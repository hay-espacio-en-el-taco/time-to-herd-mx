const axios = require('axios');
const csvtojson = require("csvtojson");
const moment = require("moment");
// get population data from https://github.com/pgriggs/timetoherd.com/blob/master/src/shared/data-factory.js
const mxPopulation = Number('126190788');

const _getCovidData = async ()  => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv');
    const data = response.data;
    const json = await _convertToJson(data);
    const yesterday = moment().subtract(1, 'days').format('yyyy-MM-D');
    const mxUpdateData = json.filter((item) => item.iso_code === 'MEX' && item.date === yesterday);

    return mxUpdateData[0];
  } catch (error) {
    console.log(error);
  }
};

const _convertToJson = async (csv) => {
  return await csvtojson().fromString(csv);
}

const getDaysToHerd = async () => {
  const daysToHerd = await _getCovidData();
  console.log(daysToHerd);
  const totalVaccinations = Number(daysToHerd.total_vaccinations);
  const dailyVaccinations = Number(daysToHerd.daily_vaccinations);

  return {
    daysToHerd: Math.round(((mxPopulation * 0.7) - (totalVaccinations * 0.5)) / (dailyVaccinations * 0.5)),
    percentVaccinated: totalVaccinations * 0.5 / mxPopulation,
  };
};

module.exports = { getDaysToHerd };