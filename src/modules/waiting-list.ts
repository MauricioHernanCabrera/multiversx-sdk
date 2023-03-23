import * as queryString from "query-string";

import { ApiClient } from "../client";
import { WaitingList, WaitingListQuery } from "../types/waiting-list";

export const waitingListModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns node waiting list
     */
    waitingList: (query: WaitingListQuery = {}) => {
      return client.get<WaitingList[]>(
        `/waiting-list?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns count of node waiting list
     */
    waitingListCount: () => {
      return client.get<number>(`/waiting-list/count`);
    },
  };
};
