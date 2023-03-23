import { ApiClient } from "../client";
import { WaitingList, WaitingListQuery } from "../types";

export const waitingListModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns node waiting list
     */
    waitingList: (query: WaitingListQuery = {}) => {
      return client.get<WaitingList[], WaitingListQuery>(
        `/waiting-list`,
        query
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
