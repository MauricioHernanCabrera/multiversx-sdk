import { ApiClient } from "../helpers/client";
import { VmQueryRequest } from "../types";

export const queryModule = (client: ApiClient) => {
  return {
    /**
     * @description Performs a vm query on a given smart contract and returns its results
     *
     * @tags query
     * @request POST:/query
     */
    vmQuery: (data: VmQueryRequest) => {
      return client.post<void, VmQueryRequest>(`/query`, data);
    },
  };
};
