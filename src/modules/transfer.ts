import { ApiClient } from "../helpers/client";
import { Transaction, TransfersQuery, TransfersCountQuery } from "../types";

export const transferModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns both transfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult), thus providing a full picture of all in/out value transfers for a given account
     *
     * @tags transfer
     * @request GET:/transfers
     */
    transfers: (query: TransfersQuery = {}) => {
      return client.get<Transaction[], TransfersQuery>(`/transfers`, query);
    },

    /**
     * @description Return total count of tranfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult)
     *
     * @tags transfer
     * @request GET:/transfers/count
     */
    transfersCount: (query: TransfersCountQuery = {}) => {
      return client.get<number, TransfersCountQuery>(`/transfers/count`, query);
    },
  };
};
