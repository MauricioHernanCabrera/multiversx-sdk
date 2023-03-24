import { ApiClient } from "../client";
import {
  EsdtSupply,
  TokenAccount,
  TokenAccountsQuery,
  TokenDetailed,
  TokensCountQuery,
  TokensQuery,
  TokenSupplyQuery,
  TokenTransactionsCountQuery,
  TokenTransactionsQuery,
  TokenTransfersCountQuery,
  TokenTransfersQuery,
  Transaction,
} from "../types";

export const tokenModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all tokens available on the blockchain
     */
    tokens: (query: TokensQuery = {}) => {
      return client.get<TokenDetailed[], TokensQuery>(`/tokens`, query);
    },

    /**
     * @description Return total number of tokens available on blockchain
     */
    tokensCount: (query: TokensCountQuery = {}) => {
      return client.get<number, TokensCountQuery>(`/tokens/count`, query);
    },

    /**
     * @description Returns token details based on a specific token identifier
     */
    tokenDetails: (identifier: string) => {
      return client.get<TokenDetailed>(`/tokens/${identifier}`);
    },

    /**
     * @description Returns general supply information for a specific token
     */
    tokenSupply: (identifier: string, query: TokenSupplyQuery = {}) => {
      return client.get<EsdtSupply, TokenSupplyQuery>(
        `/tokens/${identifier}/supply`,
        query
      );
    },

    /**
     * @description Returns a list of accounts that hold a specific token
     */
    tokenAccounts: (identifier: string, query: TokenAccountsQuery = {}) => {
      return client.get<TokenAccount[], TokenAccountsQuery>(
        `/tokens/${identifier}/accounts`,
        query
      );
    },

    /**
     * @description Returns the total number of accounts that hold a specific token
     */
    tokenAccountsCount: (identifier: string) => {
      return client.get<number>(`/tokens/${identifier}/accounts/count`);
    },

    /**
     * @description Returns a list of transactions for a specific token.
     */
    tokenTransactions: (
      identifier: string,
      query: TokenTransactionsQuery = {}
    ) => {
      return client.get<Transaction[], TokenTransactionsQuery>(
        `/tokens/${identifier}/transactions`,
        query
      );
    },

    /**
     * @description Returns the total number of transactions for a specific token
     */
    tokenTransactionsCount: (
      identifier: string,
      query: TokenTransactionsCountQuery = {}
    ) => {
      return client.get<number, TokenTransactionsCountQuery>(
        `/tokens/${identifier}/transactions/count`,
        query
      );
    },

    /**
     * @description Returns both transfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult), thus providing a full picture of all in/out value transfers for a given account
     */
    tokenTransfers: (identifier: string, query: TokenTransfersQuery = {}) => {
      return client.get<Transaction[], TokenTransfersQuery>(
        `/tokens/${identifier}/transfers`,
        query
      );
    },

    /**
     * @description Return total count of tranfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult)
     */
    tokenTransfersCount: (
      identifier: string,
      query: TokenTransfersCountQuery = {}
    ) => {
      return client.get<number, TokenTransfersCountQuery>(
        `/tokens/${identifier}/transfers/count`,
        query
      );
    },

    /**
     * @description Return the token logo PNG
     */
    tokenLogoPNG: (identifier: string) => {
      return `${client.getBaseURL()}/tokens/${identifier}/logo/png`;
    },

    /**
     * @description Return the token logo SVG
     */
    tokenLogoSVG: (identifier: string) => {
      return `${client.getBaseURL()}/tokens/${identifier}/logo/svg`;
    },
  };
};
