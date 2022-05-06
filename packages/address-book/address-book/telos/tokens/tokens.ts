import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const TLOS = {
  chainId: 40,
  address: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
  symbol: 'TLOS',
  name: 'TLOS',
  logoURI: 'https://raw.githubusercontent.com/telosnetwork/images/master/logos_2021/Symbol%202.svg',
  decimals: 18,
} as const;

const _tokens = {
  TLOS: TLOS,
  WTLOS: TLOS,
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    address: '0xf390830DF829cf22c53c8840554B98eafC5dCBc2',
    chainId: 40,
    decimals: 8,
    logoURI: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png',
  },
  WETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    chainId: 40,
    decimals: 6,
    logoURI: 'ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM',
  },
  USDT: {
    name: 'Tether Stable Coin',
    symbol: 'USDT',
    address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    chainId: 40,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/avax/0xc7198437980c041c805A1EDcbA50c1Ce5db95118/logo.png',
  },
  AVAX: {
    name: 'Avalanche',
    symbol: 'AVAX',
    address: '0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/avax/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png',
  },
  BNB: {
    name: 'Binance Coin',
    symbol: 'BNB',
    address: '0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/ftm/0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454/logo.png',
  },
  FTM: {
    name: 'Fantom',
    symbol: 'FTM',
    address: '0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/ftm/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83/logo.png',
  },
  MATIC: {
    name: 'Polygon',
    symbol: 'MATIC',
    address: '0x332730a4F6E03D9C55829435f10360E13cfA41Ff',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/avax/0x885ca6663E1E19DAD31c1e08D9958a2b8F538D53/logo.png',
  },
  SUSHI: {
    name: 'Sushi',
    symbol: 'SUSHI',
    address: '0x922D641a426DcFFaeF11680e5358F34d97d112E1',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  },
  ZAP: {
    name: 'Zap',
    symbol: 'ZAP',
    address: '0x9A271E3748F59222f5581BaE2540dAa5806b3F77',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x9A271E3748F59222f5581BaE2540dAa5806b3F77/logo.png',
  },
  CHARM: {
    name: 'Omnidex',
    symbol: 'CHARM',
    address: '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://gateway.pinata.cloud/ipfs/QmUEJGwPMGBV154hcV8kp65a9TDM6XHJHTz5EFdfW3nDiq',
  },
  DOUGE: {
    name: 'DougeCoin',
    symbol: 'DOUGE',
    address: '0xc6BC7A8dfA0f57Fe7746Ac434c01cD39679b372c',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/telos/0xc6BC7A8dfA0f57Fe7746Ac434c01cD39679b372c/logo.png',
  },
  JRS: {
    name: 'Jesse Rocket Super Coin',
    symbol: 'JRS',
    address: '0x47Be534f78c6408b454d36E75415249aD8d10a60',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/telosnetwork/images/master/logos_2021/JesseRocketTokenLogo1.png',
  },
  TM: {
    name: 'TM Coin',
    symbol: 'TM',
    address: '0xcCf69d549a25d90938B3EEA0D7A2d112c971071B',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/telosnetwork/images/master/logos_2021/TelosMemeLogo.png',
  },
  DLOS: {
    name: 'DogeLos',
    symbol: 'DLOS',
    address: '0x03Cf39c84C7E5C514Ad4b9Aa49B04255aA0cdf87',
    chainId: 40,
    decimals: 0,
    logoURI:
      'https://raw.githubusercontent.com/telosnetwork/images/master/logos_2021/dogelosLogo.png',
  },
  TFELLAS: {
    name: 'TelosFellas',
    symbol: 'TFELLAS',
    address: '0xF5bA374CF1e85d1a44EC989c5d8A25C4eACA078E',
    chainId: 40,
    decimals: 9,
    logoURI: 'https://telosfellas.com/images/tf.png',
  },
  BEVIL: {
    name: 'BabyEvils',
    symbol: 'BEVIL',
    address: '0x6439DA210988b1fD8DAC8b31CD000a7087416824',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/telosnetwork/images/master/logos_2021/BabyEvilsLogo.png',
  },
  ARIS: {
    name: 'Aristotle',
    symbol: 'ARIS',
    address: '0x1aCA60694d12A99fa5DdD1C78493b6eFd7416601',
    chainId: 40,
    decimals: 9,
    logoURI: 'https://i.imgur.com/iYmGhdu.png',
  },
  DOG: {
    name: 'Glue Dog',
    symbol: 'DOG',
    address: '0x5C8F2334BD0e7B76e15a7869E31c1F1A654a2B62',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://gateway.ipfs.io/ipfs/QmerrZ47zBxoQqkr4gfY53wvoAUqn3JXs6R6VCfE4s9nkK',
  },
  PIG: {
    name: 'Big Pig',
    symbol: 'PIG',
    address: '0xE5dE07ec385B1BD55f6bB02c01860547be9D7C0B',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://gateway.ipfs.io/ipfs/QmPThPaz3kjWaLjDAZKP8frpzaVm5Rvi5wCcUbag8QhgRL',
  },
  PLOU: {
    name: 'Ploutus',
    symbol: 'PLOU',
    address: '0x8b377ACEBccF930Fec65E9ccB693bDB1Be3Fd3c0',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/Geilogandet/token-list/cf290bf5297be0842ada7ad10f7f70bbaf718c05/Ploutus.png',
  },
  DMMY: {
    name: 'dummy DAO',
    symbol: 'DMMY',
    address: '0x2f15F85a6c346C0a2514Af70075259e503E7137B',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://omnidex.finance/images/tokens/0x2f15F85a6c346C0a2514Af70075259e503E7137B.svg',
  },
  GATe: {
    name: 'Game Ace Token extended',
    symbol: 'GATe',
    address: '0xEC0a873cdBE667E5bD68AF47932c948f872032d6',
    chainId: 40,
    decimals: 18,
    logoURI: 'https://gat.network/gat-logo-200x200.png',
  },
  ELK: {
    name: 'ELK Token',
    symbol: 'ELK',
    address: '0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/telos/0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C/logo.png',
  },
  KARMA: {
    name: 'KARMA token on omnidex',
    symbol: 'KARMA',
    address: '0x730d2Fa7dC7642E041bcE231E85b39e9bF4a6a64',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/OmniDexFinance/tokenLogo/master/0x730d2fa7dc7642e041bce231e85b39e9bf4a6a64/logo.png',
  },
  WONE: {
    name: 'WONE Harmony',
    symbol: 'WONE',
    address: '0x0caE51e1032e8461f4806e26332c030E34De3aDb',
    chainId: 40,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/elkfinance/tokens/main/logos/harmony/0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a/logo.png',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
