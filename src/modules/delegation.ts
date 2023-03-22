import { ApiClient } from "../client";
import { Delegation, DelegationLegacy } from "../types/delegation";

export class DelegationAPI {
  constructor(private readonly client: ApiClient) {}

  /**
   * @description Returns delegation staking contract information
   */
  delegationStatistics = () => {
    return this.client.get<Delegation>(`/delegation`);
  };

  /**
   * @description Returns legacy delegation contract global information
   */
  legacyDelegationStatistics = () => {
    return this.client.get<DelegationLegacy>(`/delegation-legacy`);
  };
}
