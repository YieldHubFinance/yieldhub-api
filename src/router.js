'use strict';

const Router = require('koa-router');
const router = new Router();

const gov = require('./api/stats/gov');
const noop = require('./api/noop');
const pools = require('./api/pools');
const price = require('./api/price');
const stats = require('./api/stats');
const supply = require('./api/supply');
const tvl = require('./api/tvl');

router.get('/apy', stats.apy);
router.get('/apy/breakdown', stats.apyBreakdowns);

router.get('/tvl', tvl.vaultTvl);

router.get('/supply', supply.supply);
router.get('/supply/total', supply.total);
router.get('/supply/circulating', supply.circulating);

router.get('/earnings', gov.earnings);
router.get('/holders', gov.holderCount);

router.get('/lps', price.lpsPrices);
router.get('/lps/summary', pools.summary);
router.get('/prices', price.tokenPrices);

router.get('/', noop);

module.exports = router;
