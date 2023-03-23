import { ApiClient } from "../client";
import { TransactionBatchSimplified } from "../types/batch";

export const batchModule = (client: ApiClient) => {
  return {
    /**
     * @description
     */
    createBatch: (data: TransactionBatchSimplified) => {
      return client.post<void, TransactionBatchSimplified>(`/batch`, data);
    },

    /**
     * @description
     */
    batchList: () => {
      return client.get<void>(`/batch`);
    },

    /**
     * @description
     */
    batchDetails: (id: string) => {
      return client.get<void>(`/batch/${id}`);
    },
  };
};
