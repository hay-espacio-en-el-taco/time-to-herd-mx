const axios = require('axios');
const csvtojsonV2 = require("csvtojson");

const _getCovidFile = async ()  => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv');
    const data = response.data;
    console.log(data);
    _convertToJson(data);
  } catch (error) {
    console.log(error);
  }
};

const _convertToJson = (csv) => {

}

const getDaysToHerd = () => {
  _getCovidFile();
};

module.exports = { getDaysToHerd };