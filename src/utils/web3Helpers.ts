import Web3 from 'web3';
import { addressBookByChainId, ChainId } from '../../packages/address-book/address-book';
import { YieldHubFinance } from '../../packages/address-book/types/yieldhubfinance';

import {
  TELOS_RPC,
  TELOS_CHAIN_ID,
} from '../constants';

const MULTICALLS: Record<ChainId, Pick<YieldHubFinance, 'multicall'>['multicall']> = {
  [ChainId.telos]: addressBookByChainId[ChainId.telos].platforms.yieldhubfinance.multicall,
};

const clients: Record<keyof typeof ChainId, Web3[]> = {
  telos: [],
};
clients.telos.push(new Web3(TELOS_RPC));

export const chainRandomClients = {
  telosRandomClient: () => clients.telos[~~(clients.telos.length * Math.random())],
};

export const _web3Factory = (chainId: ChainId) => {
  switch (chainId) {
    case TELOS_CHAIN_ID:
      return chainRandomClients.telosRandomClient();
  }
};

export const _multicallAddress = (chainId: ChainId) => MULTICALLS[chainId];
