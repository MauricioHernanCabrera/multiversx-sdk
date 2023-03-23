import { ApiClient } from "../client";
import { BlocksQuery, Block, BlocksCountQuery, BlockDetailed } from "../types";

export const blockModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all blocks from all shards
     */
    blocks: (query: BlocksQuery = {}) => {
      return client.get<Block[], BlocksQuery>(`/blocks`, query);
    },

    /**
     * @description Returns count of all blocks from all shards
     */
    blocksCount: (query: BlocksCountQuery = {}) => {
      return client.get<number, BlocksCountQuery>(`/blocks/count`, query);
    },

    /**
     * @description Returns block information details for a given hash
     */
    blockDetails: (hash: string) => {
      return client.get<BlockDetailed>(`/blocks/${hash}`);
    },
  };
};
