import { ApiClient } from "../client";
import { NetworkConstants, Economics, Stats, About } from "../types";

export const networkModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns network-specific constants that can be used to automatically configure dapps
     *
     * @tags network
     * @request GET:/constants
     */
    networkConstants: () => {
      return client.get<NetworkConstants>(`/constants`);
    },

    /**
     * @description Returns general economics information
     *
     * @tags network
     * @request GET:/economics
     */
    networkEconomics: () => {
      return client.get<Economics>(`/economics`);
    },

    /**
     * @description Returns general network statistics
     *
     * @tags network
     * @request GET:/stats
     */
    networkStatistics: () => {
      return client.get<Stats>(`/stats`);
    },

    /**
     * @description Returns general information about API deployment
     *
     * @tags network
     * @request GET:/about
     */
    about: () => {
      return client.get<About>(`/about`);
    },
  };
};
