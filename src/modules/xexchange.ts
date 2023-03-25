import { ApiClient } from "../client";
import {
  MexEconomics,
  MexFarm,
  MexPair,
  MexToken,
  XExchangeFarmsQuery,
  XExchangePairsQuery,
  XExchangeTokensQuery,
} from "../types";

export const xexchangeModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns economics details of xExchange
     *
     * @tags xexchange
     * @request GET:/mex/economics
     */
    xExchangeEconomics: () => {
      return client.get<MexEconomics>(`/mex/economics`);
    },

    /**
     * @description Returns active liquidity pools available on xExchange
     *
     * @tags xexchange
     * @request GET:/mex/pairs
     */
    xExchangePairs: (query: XExchangePairsQuery = {}) => {
      return client.get<MexPair[], XExchangePairsQuery>(`/mex/pairs`, query);
    },

    /**
     * @description Returns active liquidity pools count available on Maiar Exchange
     *
     * @tags xexchange
     * @request GET:/mex/pairs/count
     */
    xExchangePairsCount: () => {
      return client.get<number>(`/mex/pairs/count`);
    },

    /**
     * @description Returns a list of tokens listed on xExchange
     *
     * @tags xexchange
     * @request GET:/mex/tokens
     */
    xExchangeTokens: (query: XExchangeTokensQuery = {}) => {
      return client.get<MexToken[], XExchangeTokensQuery>(`/mex/tokens`, query);
    },

    /**
     * @description Returns tokens count available on Maiar Exchange
     *
     * @tags xexchange
     * @request GET:/mex/tokens/count
     */
    xExchangeTokensCount: () => {
      return client.get<number>(`/mex/tokens/count`);
    },

    /**
     * @description Returns a specific token listed on xExchange
     *
     * @tags xexchange
     * @request GET:/mex/tokens/{identifier}
     */
    xExchangeTokenDetails: (identifier: string) => {
      return client.get<MexToken>(`/mex/tokens/${identifier}`);
    },

    /**
     * @description Returns a list of farms listed on xExchange
     *
     * @tags xexchange
     * @request GET:/mex/farms
     */
    xExchangeFarms: (query: XExchangeFarmsQuery = {}) => {
      return client.get<MexFarm[], XExchangeFarmsQuery>(`/mex/farms`, query);
    },

    /**
     * @description Returns farms count available on Maiar Exchange
     *
     * @tags xexchange
     * @request GET:/mex/farms/count
     */
    xExchangeFarmsCount: () => {
      return client.get<number>(`/mex/farms/count`);
    },

    /**
     * @description Returns liquidity pool details by providing a combination of two tokens
     *
     * @tags xexchange
     * @request GET:/mex/pairs/{baseId}/{quoteId}
     */
    xExchangePairDetails: (baseId: string, quoteId: string) => {
      return client.get<MexPair>(`/mex/pairs/${baseId}/${quoteId}`);
    },
  };
};
