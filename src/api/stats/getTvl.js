const getChainTvl = require('./getChainTvl.js');

const { TELOS_CHAIN_ID, TELOS_VAULTS_ENDPOINT } = require('../../constants');

const INIT_DELAY = 0;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let cache;

const chains = [
  {
    chainId: TELOS_CHAIN_ID,
    vaultsEndpoint: TELOS_VAULTS_ENDPOINT,
  },
];

const getTvl = async () => {
  return await cache;
};

const updateTvl = async () => {
  console.log('> updating tvl');

  let tvl = {};

  try {
    let promises = [];

    chains.forEach(chain => promises.push(getChainTvl(chain)));

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status !== 'fulfilled') {
        console.warn('getChainTvl error', result.reason);
        continue;
      }
      tvl = { ...tvl, ...result.value };
    }

    console.log('> updated tvl');
  } catch (err) {
    console.error('> tvl initialization failed', err);
  }

  cache = Promise.resolve(tvl);

  setTimeout(updateTvl, REFRESH_INTERVAL);

  return tvl;
};

const init =
  // Flexible delayed initialization used to work around ratelimits
  new Promise((resolve, reject) => {
    setTimeout(resolve, INIT_DELAY);
  }).then(updateTvl);

cache = init.then(response => response);

module.exports = getTvl;
