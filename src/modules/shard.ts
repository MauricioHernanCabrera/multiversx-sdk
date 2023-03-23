import { ApiClient } from "../client";
import { Shard, ShardsQuery } from "../types";

export const shardModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all available shards
     */
    shards: (query: ShardsQuery = {}) => {
      return client.get<Shard[], ShardsQuery>(`/shards`, query);
    },
  };
};
