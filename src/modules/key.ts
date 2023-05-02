import { ApiClient } from "../helpers/client";
import { KeyUnbondPeriod } from "../types";

export const keyModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns remaining unbonding period for a given bls key
     *
     * @tags key
     * @request GET:/keys/{key}/unbond-period
     */
    unbondingPeriod: (key: string) => {
      return client.get<KeyUnbondPeriod>(`/keys/${key}/unbond-period`);
    },
  };
};
