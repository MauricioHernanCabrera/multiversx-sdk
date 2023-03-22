import * as queryString from "query-string";

import { ApiClient } from "../client";
import {
  BlocksQuery,
  Block,
  BlocksCountQuery,
  BlockDetailed,
} from "../types/block";

export const blockModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all blocks from all shards
     */
    blocks: (query: BlocksQuery = {}) => {
      return client.get<Block>(`/blocks?${queryString.stringify(query)}`);
    },

    /**
     * @description Returns count of all blocks from all shards
     */
    blocksCount: (query: BlocksCountQuery = {}) => {
      return client.get<number>(
        `/blocks/count?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns block information details for a given hash
     */
    blockDetails: (hash: string) => {
      return client.get<BlockDetailed>(`/blocks/${hash}`);
    },
  };
};
