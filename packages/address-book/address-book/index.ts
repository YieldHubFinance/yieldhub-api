import { telos } from './telos';
import Chain from '../types/chain';
import { ChainId } from '../types/chainid';
import { ConstRecord } from '../types/const';

export * from '../types/chainid';

const _addressBook: {
  readonly telos: Chain;
} = {
  telos,
} as const;

const _addressBookByChainId: {
  readonly '40': Chain;
} = {
  [ChainId.telos]: telos,
} as const;

export const addressBook: ConstRecord<typeof _addressBook, Chain> = _addressBook;

export const addressBookByChainId: ConstRecord<typeof _addressBookByChainId, Chain> =
  _addressBookByChainId;
