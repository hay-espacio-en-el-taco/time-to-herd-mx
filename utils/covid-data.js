const axios = require('axios');
const csvtojson = require('csvtojson');
const moment = require('moment');
const tz = require('moment-timezone');

// get population data from https://github.com/pgriggs/timetoherd.com/blob/master/src/shared/data-factory.js
const mxPopulation = Number('126190788');

const _getCovidData = async ()  => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv');
    const data = response.data;
    const json = await _convertToJson(data);
    const yesterday = tz(moment().subtract(1, 'days'), 'America/Mexico_City').format('yyyy-MM-D');
    const mxUpdateData = json.filter((item) => item.iso_code === 'MEX' && item.date === yesterday);

    if (mxUpdateData.length === 0) {
      throw Error(`Data of the day ${yesterday} it's not avaliable yet`);
    }

    return mxUpdateData[0];
  } catch (error) {
    console.error(error);
  }
};

const _convertToJson = async (csv) => {
  return await csvtojson().fromString(csv);
};

const getDaysToHerd = async () => {
  const daysToHerd = await _getCovidData();
  const totalVaccinations = Number(daysToHerd.total_vaccinations);
  const dailyVaccinations = Number(daysToHerd.daily_vaccinations);

  return {
    daysToHerd: Math.round(((mxPopulation * 0.7) - (totalVaccinations * 0.5)) / (dailyVaccinations * 0.5)),
    percentVaccinated: totalVaccinations * 0.5 / mxPopulation,
  };
};

module.exports = { getDaysToHerd };