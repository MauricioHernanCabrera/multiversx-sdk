import { ApiClient } from "../helpers/client";
import { Delegation, DelegationLegacy } from "../types";

export const delegationModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns delegation staking contract information
     *
     * @tags delegation
     * @request GET:/delegation
     */
    delegationStatistics: () => {
      return client.get<Delegation>(`/delegation`);
    },

    /**
     * @description Returns legacy delegation contract global information
     *
     * @tags delegation
     * @request GET:/delegation-legacy
     */
    legacyDelegationStatistics: () => {
      return client.get<DelegationLegacy>(`/delegation-legacy`);
    },
  };
};
