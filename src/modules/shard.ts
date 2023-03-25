import { ApiClient } from "../client";
import { Shard, ShardsQuery } from "../types";

export const shardModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all available shards
     *
     * @tags shard
     * @request GET:/shards
     */
    shards: (query: ShardsQuery = {}) => {
      return client.get<Shard[], ShardsQuery>(`/shards`, query);
    },
  };
};
