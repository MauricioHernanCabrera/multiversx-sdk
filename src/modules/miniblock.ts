import * as queryString from "query-string";

import { ApiClient } from "../client";
import { MiniblocksQuery, MiniBlockDetailed } from "../types/miniblock";

export const miniblockModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all distinct miniblocks
     */
    miniblocks: (query: MiniblocksQuery = {}) => {
      return client.get<MiniBlockDetailed[]>(
        `/miniblocks?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns miniblock details for a given miniBlockHash.
     */
    miniblockDetails: (miniBlockHash: string) => {
      return client.get<MiniBlockDetailed>(`/miniblocks?${miniBlockHash}`);
    },
  };
};
