const covidData = require('../utils/covid-data');
const assert = require('assert').strict;

describe('getDaysToHerd', function() {
  it('Generate days to herd', async function() {
    jest.mock('moment', () => {
      return () => jest.requireActual('moment')('2020-01-13T00:00:00.000Z');
    });
    const object = await covidData.getDaysToHerd();
    console.log(object);
    assert.notStrictEqual(object, 1);
  });
});