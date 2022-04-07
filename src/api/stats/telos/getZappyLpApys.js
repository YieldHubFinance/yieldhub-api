const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { telosWeb3: web3, multicallAddress } = require('../../../utils/web3');
import { getFarmWithTradingFeesApy } from '../../../utils/getFarmWithTradingFeesApy';

const MasterChef = require('../../../abis/telos/MasterChef.json');
const ERC20 = require('../../../abis/ERC20.json');
const fetchPrice = require('../../../utils/fetchPrice');
const pools = require('../../../data/telos/zappyLpPools.json');
const { BASE_HPY, TELOS_CHAIN_ID } = require('../../../constants');
import { ZAPPY_LPF } from '../../../constants';

const { compound } = require('../../../utils/compound');

const chef = '0x3D2c6bCED5f50f5412234b87fF0B445aBA4d10e9';
const oracleId = 'ZAP';
const oracle = 'tokens';
const DECIMALS = '1e18';
const secondsPerBlock = 0.5;
const secondsPerYear = 31536000;

const liquidityProviderFee = ZAPPY_LPF;
const yieldHubPerformanceFee = 0.045;
const shareAfterYieldHubPerformanceFee = 1 - yieldHubPerformanceFee;

const getZappyLpApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  const tokenPrice = await fetchPrice({ oracle, id: oracleId });
  const { rewardPerSecond, totalAllocPoint } = await getMasterChefData();
  const { balances, allocPoints } = await getPoolsData(pools);
  const pairAddresses = pools.map(pool => pool.address);

  for (let i = 0; i < pools.length; i++) {
    const pool = pools[i];

    const lpPrice = await fetchPrice({ oracle: 'lps', id: pool.name });
    const totalStakedInUsd = balances[i].times(lpPrice).dividedBy(pool.decimals);
    const poolRewards = rewardPerSecond.times(allocPoints[i]).dividedBy(totalAllocPoint);
    const yearlyRewards = poolRewards.times(secondsPerYear);
    const yearlyRewardsInUsd = yearlyRewards.times(tokenPrice).dividedBy(DECIMALS);
    const simpleApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
    const vaultApr = simpleApy.times(shareAfterYieldHubPerformanceFee);
    const vaultApy = compound(simpleApy, BASE_HPY, 1, shareAfterYieldHubPerformanceFee);
    const tradingApr = new BigNumber(0);
    const totalApy = getFarmWithTradingFeesApy(
      simpleApy,
      tradingApr,
      BASE_HPY,
      1,
      shareAfterYieldHubPerformanceFee
    );
    // Create reference for legacy /apy
    const legacyApyValue = { [pool.name]: totalApy };

    apys = { ...apys, ...legacyApyValue };

    // Create reference for breakdown /apy
    const componentValues = {
      [pool.name]: {
        vaultApr: vaultApr.toNumber(),
        compoundingsPerYear: BASE_HPY,
        yieldHubPerformanceFee: yieldHubPerformanceFee,
        vaultApy: vaultApy,
        lpFee: liquidityProviderFee,
        tradingApr: tradingApr.toNumber(),
        totalApy: totalApy,
      },
    };

    apyBreakdowns = { ...apyBreakdowns, ...componentValues };
  }

  // Return both objects for later parsing
  return {
    apys,
    apyBreakdowns,
  };
};

const getMasterChefData = async () => {
  const masterchefContract = new web3.eth.Contract(MasterChef, chef);
  const rewardPerSecond = new BigNumber(await masterchefContract.methods.zapPerSecond().call());
  const totalAllocPoint = new BigNumber(await masterchefContract.methods.totalAllocPoint().call());
  return { rewardPerSecond, totalAllocPoint };
};

const getPoolsData = async pools => {
  const masterchefContract = new web3.eth.Contract(MasterChef, chef);

  const wtlosZapPending = await masterchefContract.methods
    .pendingZAP('0', '0x00474bb991c6Ee634e68FC2DC8332352b008c52d')
    .call();
  console.log('ZAP/WTLOS Pending Zap: ', wtlosZapPending * 1e-18);

  const multicall = new MultiCall(web3, multicallAddress(TELOS_CHAIN_ID));
  const balanceCalls = [];
  const allocPointCalls = [];

  pools.forEach(pool => {
    const tokenContract = new web3.eth.Contract(ERC20, pool.address);
    balanceCalls.push({
      balance: tokenContract.methods.balanceOf(chef),
    });
    allocPointCalls.push({
      allocPoint: masterchefContract.methods.poolInfo(pool.poolId),
    });
  });

  const res = await multicall.all([balanceCalls, allocPointCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const allocPoints = res[1].map(v => v.allocPoint['1']);
  return { balances, allocPoints };
};

module.exports = getZappyLpApys;
