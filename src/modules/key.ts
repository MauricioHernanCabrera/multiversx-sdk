import { ApiClient } from "../client";
import { KeyUnbondPeriod } from "../types";

export const keyModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns remaining unbonding period for a given bls key
     */
    unbondingPeriod: (key: string) => {
      return client.get<KeyUnbondPeriod>(`/keys/${key}/unbond-period`);
    },
  };
};
