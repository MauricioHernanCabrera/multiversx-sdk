import { ApiClient } from "../helpers/client";
import { WaitingList, WaitingListQuery } from "../types";

export const waitingListModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns node waiting list
     *
     * @tags waiting-list
     * @request GET:/waiting-list
     */
    waitingList: (query: WaitingListQuery = {}) => {
      return client.get<WaitingList[], WaitingListQuery>(
        `/waiting-list`,
        query
      );
    },

    /**
     * @description Returns count of node waiting list
     *
     * @tags waiting-list
     * @request GET:/waiting-list/count
     */
    waitingListCount: () => {
      return client.get<number>(`/waiting-list/count`);
    },
  };
};
