const { MULTICHAIN_ENDPOINTS } = require('../../constants');

const buildResponse = pools => {
  return pools.map(pool => {
    return {
      id: pool.id,
      name: pool.name,
      tokenAddress: pool.tokenAddress,
      tokenDecimals: pool.tokenDecimals,
      earnedToken: pool.earnedToken,
      earnContractAddress: pool.earnContractAddress,
      status: pool.status,
      platform: pool.platform,
      stratType: pool.stratType,
    };
  });
};

async function summary(ctx) {
  try {
    // Expect the form chainIds=1,2,3
    let chainIds = ctx.request.query.chainIds?.split(',') ?? [];
    if (chainIds.length === 0) {
      chainIds = Object.keys(MULTICHAIN_ENDPOINTS);
    }

    ctx.body = Object.fromEntries(
      chainIds.map(chainId => [chainId, buildResponse(MULTICHAIN_ENDPOINTS[chainId] ?? [])])
    );
    ctx.status = 200;
  } catch (err) {
    console.error(err);
    ctx.status = 500;
  }
}

module.exports = {
  summary,
};
