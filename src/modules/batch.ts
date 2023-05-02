import { ApiClient } from "../helpers/client";
import { TransactionBatchSimplified } from "../types";

export const batchModule = (client: ApiClient) => {
  return {
    /**
     * @description
     *
     * @tags batch
     * @request POST:/batch
     */
    createBatch: (data: TransactionBatchSimplified) => {
      return client.post<void, TransactionBatchSimplified>(`/batch`, data);
    },

    /**
     * @description
     *
     * @tags batch
     * @request GET:/batch
     */
    batchList: () => {
      return client.get<void>(`/batch`);
    },

    /**
     * @description
     *
     * @tags batch
     * @request GET:/batch/{id}
     */
    batchDetails: (id: string) => {
      return client.get<void>(`/batch/${id}`);
    },
  };
};
