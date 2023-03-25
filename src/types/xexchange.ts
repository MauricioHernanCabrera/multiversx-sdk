export interface MexEconomics {
  /** @example 8045920000000 */
  totalSupply: number;
  /** @example 4913924072690 */
  circulatingSupply: number;
  /** @example 0.00020552146843751037 */
  price: number;
  /** @example 1009916891 */
  marketCap: number;
  /** @example 13680479 */
  volume24h: number;
  /** @example 15 */
  marketPairs: number;
}

export interface XExchangePairsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface MexPair {
  address: string;
  id: string;
  symbol: string;
  name: string;
  price: number;
  /** @example "MEX-455c57" */
  baseId: string;
  /** @example "MEX" */
  baseSymbol: string;
  /** @example "MEX" */
  baseName: string;
  /** @example 0.00020596180499578328 */
  basePrice: number;
  /** @example "WEGLD-bd4d79" */
  quoteId: string;
  /** @example "WEGLD" */
  quoteSymbol: string;
  /** @example "WrappedEGLD" */
  quoteName: string;
  /** @example 145.26032 */
  quotePrice: number;
  /** @example "347667206.84174806" */
  totalValue: number;
  /** @example "2109423.4531209776" */
  volume24h: number;
  state: "active" | "inactive" | "paused";
  type:
    | "core"
    | "community"
    | "ecosystem"
    | "experimental"
    | "jungle"
    | "unlisted";
}

export interface XExchangeTokensQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface MexToken {
  /** @example "MEX-455c57" */
  id: string;
  /** @example "MEX" */
  symbol: string;
  /** @example "MEX" */
  name: string;
  /** @example 0.00020673875825058 */
  price: number;
}

export interface XExchangeFarmsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface MexFarm {
  type: "standard" | "metastaking";
  version: string | null;
  /** @example "erd1qqqqqqqqqqqqqpgqzps75vsk97w9nsx2cenv2r2tyxl4fl402jpsx78m9j" */
  address: string;
  id: string;
  symbol: string;
  name: string;
  price: number;
  farmingId: string;
  farmingSymbol: string;
  farmingName: string;
  farmingPrice: number;
  farmedId: string;
  farmedSymbol: string;
  farmedName: string;
  farmedPrice: number;
}
