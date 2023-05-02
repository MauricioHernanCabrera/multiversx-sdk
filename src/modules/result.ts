import { ApiClient } from "../helpers/client";
import { SmartContractResult, SmartContractResultsQuery } from "../types";

export const resultModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all smart contract results available on the blockchain
     *
     * @tags result
     * @request GET:/results
     */
    smartContractResults: (query: SmartContractResultsQuery = {}) => {
      return client.get<SmartContractResult[], SmartContractResultsQuery>(
        `/results`,
        query
      );
    },

    /**
     * @description Returns total number of smart contracts results
     *
     * @tags result
     * @request GET:/results/count
     */
    smartContractResultsCount: () => {
      return client.get<number>(`/results/count`);
    },

    /**
     * @description Returns smart contract details for a given hash
     *
     * @tags result
     * @request GET:/results/{scHash}
     */
    smartContractResultDetails: (scHash: string) => {
      return client.get<SmartContractResult>(`/results/${scHash}`);
    },
  };
};
