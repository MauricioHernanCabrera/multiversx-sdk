import { ApiClient } from "../client";
import { DappConfig } from "../types/dapp-config";

export const dappConfigModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns configuration used in dapps
     */
    dappConfiguration: () => {
      return client.get<DappConfig>(`/dapp/config`);
    },
  };
};
