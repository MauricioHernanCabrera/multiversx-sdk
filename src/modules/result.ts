import { ApiClient } from "../client";
import { SmartContractResult, SmartContractResultsQuery } from "../types";

export const resultModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all smart contract results available on the blockchain
     */
    smartContractResults: (query: SmartContractResultsQuery = {}) => {
      return client.get<SmartContractResult[], SmartContractResultsQuery>(
        `/results`,
        query
      );
    },

    /**
     * @description Returns total number of smart contracts results
     */
    smartContractResultsCount: () => {
      return client.get<number>(`/results`);
    },

    /**
     * @description Returns smart contract details for a given hash
     */
    smartContractResultDetails: (scHash: string) => {
      return client.get<SmartContractResult>(`/results/${scHash}`);
    },
  };
};
