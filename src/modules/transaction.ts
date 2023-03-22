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

export class TransactionAPI {
  constructor(private readonly client: ApiClient) {}

  /**
   * @description Returns a list of transactions available on the blockchain.
   */
  transactionList = (query: TransactionListQuery = {}) => {
    return this.client.get<Transaction[]>(
      `/transactions?${queryString.stringify(query)}`
    );
  };

  /**
   * @description Posts a signed transaction on the blockchain
   */
  sendTransaction = (data: TransactionCreate) => {
    return this.client.post<TransactionSendResult, TransactionCreate>(
      `/transactions`,
      data
    );
  };

  /**
   * @description Returns the total number of transactions
   */
  transactionsCount = (query: TransactionsCountQuery = {}) => {
    return this.client.get<number>(
      `/transactions/count?${queryString.stringify(query)}`
    );
  };

  /**
   * @description Return transaction details for a given transaction hash
   */
  transactionDetails = (txHash, query: TransactionDetailsQuery = {}) => {
    return this.client.get<TransactionDetailed>(
      `/transactions/${txHash}?${queryString.stringify(query)}`
    );
  };

  /**
   * @description Decodes transaction action, given a minimum set of transaction details
   */
  decodeTransaction = (data: TransactionDecodeDto) => {
    return this.client.post<TransactionDecodeDto, TransactionDecodeDto>(
      `/transactions/decode`,
      data
    );
  };
}
