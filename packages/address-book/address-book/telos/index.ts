import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';

import { yieldhubfinance } from './platforms/yieldhubfinance';
import { omnidex } from './platforms/omnidex';
import { zappy } from './platforms/zappy';

import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _telos = {
  platforms: {
    yieldhubfinance,
    omnidex,
    zappy,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const telos: ConstInterface<typeof _telos, Chain> = _telos;
