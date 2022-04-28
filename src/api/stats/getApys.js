const { getTelosApys } = require('./telos');

const REFRESH_INTERVAL = 15 * 60 * 1000;

let cache = Promise.resolve({ apys: {}, apyBreakdowns: {} });

const getApys = async () => {
  return await cache;
};

const updateApys = async () => {
  console.log('> updating apys');

  let previous = await cache;

  let apys = { ...previous.apys };
  let apyBreakdowns = { ...previous.apyBreakdowns };

  try {
    const results = await Promise.allSettled([getTelosApys()]);

    for (const result of results) {
      if (result.status !== 'fulfilled') {
        console.warn('getApys error', result.reason);
        continue;
      }

      // Set default APY values
      let mappedApyValues = result.value;
      let mappedApyBreakdownValues = {};

      // Loop through key values and move default breakdown format
      // To require totalApy key
      for (const [key, value] of Object.entries(result.value)) {
        mappedApyBreakdownValues[key] = {
          totalApy: value,
        };
      }

      // Break out to apy and breakdowns if possible
      let hasApyBreakdowns = 'apyBreakdowns' in result.value;
      if (hasApyBreakdowns) {
        mappedApyValues = result.value.apys;
        mappedApyBreakdownValues = result.value.apyBreakdowns;
      }

      apys = { ...apys, ...mappedApyValues };

      apyBreakdowns = { ...apyBreakdowns, ...mappedApyBreakdownValues };
    }

    console.log('> updated apys');
  } catch (err) {
    console.error('> apy initialization failed', err);
  } finally {
    setTimeout(updateApys, REFRESH_INTERVAL);
  }

  let result = {
    apys,
    apyBreakdowns,
  };

  cache = Promise.resolve(result);

  return result;
};

cache = updateApys();

module.exports = { getApys };
