import { ApiClient } from "../client";
import { Delegation, DelegationLegacy } from "../types/delegation";

export const delegationModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns delegation staking contract information
     */
    delegationStatistics: () => {
      return client.get<Delegation>(`/delegation`);
    },

    /**
     * @description Returns legacy delegation contract global information
     */
    legacyDelegationStatistics: () => {
      return client.get<DelegationLegacy>(`/delegation-legacy`);
    },
  };
};
