import { ApiClient } from "../client";
import { NetworkConstants, Economics, Stats, About } from "../types";

export const networkModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns network-specific constants that can be used to automatically configure dapps
     */
    networkConstants: () => {
      return client.get<NetworkConstants>(`/constants`);
    },

    /**
     * @description Returns general economics information
     */
    networkEconomics: () => {
      return client.get<Economics>(`/economics`);
    },

    /**
     * @description Returns general network statistics
     */
    networkStatistics: () => {
      return client.get<Stats>(`/stats`);
    },

    /**
     * @description Returns general information about API deployment
     */
    about: () => {
      return client.get<About>(`/about`);
    },
  };
};
