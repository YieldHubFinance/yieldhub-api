const getChainTvl = require('./getChainTvl.js');

const { TELOS_CHAIN_ID, TELOS_VAULTS_ENDPOINT } = require('../../constants');

const REFRESH_INTERVAL = 15 * 60 * 1000;

let cache = Promise.resolve({});

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

  let tvl = await cache;

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
  } finally {
    setTimeout(updateTvl, REFRESH_INTERVAL);
  }

  cache = Promise.resolve(tvl);

  return tvl;
};

cache = updateTvl();

module.exports = getTvl;
