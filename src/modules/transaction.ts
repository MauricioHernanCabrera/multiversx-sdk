import * as queryString from "query-string";

import { ApiClient } from "../client";
import {
  Transaction,
  TransactionCreate,
  TransactionSendResult,
  TransactionDetailsQuery,
  TransactionDetailed,
  TransactionDecodeDto,
  TransactionListQuery,
  TransactionsCountQuery,
} from "../types/transaction";

export const transactionModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of transactions available on the blockchain.
     */
    transactionList: (query: TransactionListQuery = {}) => {
      return client.get<Transaction[]>(
        `/transactions?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Posts a signed transaction on the blockchain
     */
    sendTransaction: (data: TransactionCreate) => {
      return client.post<TransactionSendResult, TransactionCreate>(
        `/transactions`,
        data
      );
    },

    /**
     * @description Returns the total number of transactions
     */
    transactionsCount: (query: TransactionsCountQuery = {}) => {
      return client.get<number>(
        `/transactions/count?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Return transaction details for a given transaction hash
     */
    transactionDetails: (txHash, query: TransactionDetailsQuery = {}) => {
      return client.get<TransactionDetailed>(
        `/transactions/${txHash}?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Decodes transaction action, given a minimum set of transaction details
     */
    decodeTransaction: (data: TransactionDecodeDto) => {
      return client.post<TransactionDecodeDto, TransactionDecodeDto>(
        `/transactions/decode`,
        data
      );
    },
  };
};
