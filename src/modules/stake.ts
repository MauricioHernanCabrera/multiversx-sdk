import { ApiClient } from "../helpers/client";
import { GlobalStake } from "../types";

export const stakeModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns general staking information
     *
     * @tags stake
     * @request GET:/stake
     */
    stake: () => {
      return client.get<GlobalStake>(`/stake`);
    },
  };
};
