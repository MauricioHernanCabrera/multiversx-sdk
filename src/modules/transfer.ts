import * as queryString from "query-string";

import { ApiClient } from "../client";
import { Transaction, TransfersQuery, TransfersCountQuery } from "../types";

export const transferModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns both transfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult), thus providing a full picture of all in/out value transfers for a given account
     */
    transfers: (query: TransfersQuery = {}) => {
      return client.get<Transaction[]>(
        `/transfers?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Return total count of tranfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult)
     */
    transfersCount: (query: TransfersCountQuery = {}) => {
      return client.get<number>(
        `/transfers/count?${queryString.stringify(query)}`
      );
    },
  };
};
