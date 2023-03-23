import { ApiClient } from "../client";
import { GlobalStake } from "../types/stake";

export const stakeModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns general staking information
     */
    stake: () => {
      return client.get<GlobalStake>(`/stake`);
    },
  };
};
