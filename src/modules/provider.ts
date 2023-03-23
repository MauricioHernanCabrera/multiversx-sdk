import * as queryString from "query-string";

import { ApiClient } from "../client";
import { ProvidersQuery, Provider } from "../types/provider";

export const providerModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all providers
     */
    providers: (query: ProvidersQuery = {}) => {
      return client.get<Provider[]>(
        `/providers?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns provider details for a given address
     */
    providerDetails: (address: string) => {
      return client.get<Provider>(`/providers/${address}`);
    },
  };
};
