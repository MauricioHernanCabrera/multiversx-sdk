import { ApiClient } from "../client";
import { MiniblocksQuery, MiniBlockDetailed } from "../types";

export const miniblockModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all distinct miniblocks
     *
     * @tags miniblock
     * @request GET:/miniblocks
     */
    miniblocks: (query: MiniblocksQuery = {}) => {
      return client.get<MiniBlockDetailed[], MiniblocksQuery>(
        `/miniblocks`,
        query
      );
    },

    /**
     * @description Returns miniblock details for a given miniBlockHash.
     *
     * @tags miniblock
     * @request GET:/miniblocks/{miniBlockHash}
     */
    miniblockDetails: (miniBlockHash: string) => {
      return client.get<MiniBlockDetailed>(`/miniblocks/${miniBlockHash}`);
    },
  };
};
