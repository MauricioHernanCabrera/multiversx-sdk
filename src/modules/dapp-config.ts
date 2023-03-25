import { ApiClient } from "../client";
import { DappConfig } from "../types";

export const dappConfigModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns configuration used in dapps
     *
     * @tags dapp-config
     * @request GET:/dapp/config
     */
    dappConfiguration: () => {
      return client.get<DappConfig>(`/dapp/config`);
    },
  };
};
