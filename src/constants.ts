import { ChainId } from '../packages/address-book/address-book';
import { telosPools } from './utils/telosPools';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const BASE_HPY = 2190;
const MINUTELY_HPY = 525600;
const HOURLY_HPY = 8760;
const DAILY_HPY = 365;
const WEEKLY_HPY = 52;

const TELOS_RPC = process.env.TELOS_RPC || 'https://mainnet.telos.net/evm';

const TELOS_CHAIN_ID = ChainId.telos;

const DFYN_LPF = 0.003;
const SUSHI_LPF = 0.003;
const SPIRIT_LPF = 0.003;
const QUICK_LPF = 0.003;
const APEPOLY_LPF = 0.002;
const COMETH_LPF = 0.005;
const PCS_LPF = 0.0025;
const APE_LPF = 0.002;
const SPOOKY_LPF = 0.002;
const JOE_LPF = 0.003;
const SOLAR_LPF = 0.0025;
const FUSEFI_LPF = 0.003;
const NET_LPF = 0.003;
const PANGOLIN_LPF = 0.003;
const TETHYS_LPF = 0.002;
const BEAMSWAP_LPF = 0.0017;
const OMNIDEX_LPF = 0.0017;
const ZAPPY_LPF = 0.002;

const MULTICHAIN_RPC: Record<ChainId, string> = {
  [ChainId.telos]: TELOS_RPC,
};

const TELOS_VAULTS_ENDPOINT = telosPools;

const MULTICHAIN_ENDPOINTS = {
  telos: TELOS_VAULTS_ENDPOINT,
};

const YIELDHUB_PERFORMANCE_FEE = 0.045;
const SHARE_AFTER_PERFORMANCE_FEE = 1 - YIELDHUB_PERFORMANCE_FEE;

const EXCLUDED_IDS_FROM_TVL = ['venus-wbnb'];

export {
  API_BASE_URL,
  TELOS_RPC,
  TELOS_CHAIN_ID,
  TELOS_VAULTS_ENDPOINT,
  BASE_HPY,
  MINUTELY_HPY,
  HOURLY_HPY,
  DAILY_HPY,
  WEEKLY_HPY,
  MULTICHAIN_RPC,
  MULTICHAIN_ENDPOINTS,
  DFYN_LPF,
  SUSHI_LPF,
  SPIRIT_LPF,
  QUICK_LPF,
  APEPOLY_LPF,
  COMETH_LPF,
  PCS_LPF,
  APE_LPF,
  SPOOKY_LPF,
  JOE_LPF,
  SOLAR_LPF,
  FUSEFI_LPF,
  NET_LPF,
  PANGOLIN_LPF,
  TETHYS_LPF,
  BEAMSWAP_LPF,
  OMNIDEX_LPF,
  ZAPPY_LPF,
  YIELDHUB_PERFORMANCE_FEE,
  SHARE_AFTER_PERFORMANCE_FEE,
  EXCLUDED_IDS_FROM_TVL,
};
