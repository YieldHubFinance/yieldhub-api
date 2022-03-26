import { YieldHubFinance } from './yieldhubfinance';
import type Token from './token';

export default interface Chain {
  readonly platforms: Record<string, Record<string, unknown>> & {
    yieldhubfinance: YieldHubFinance;
  };
  readonly tokens: Record<string, Token>;
  readonly tokenAddressMap: Record<string, Token>;
}
