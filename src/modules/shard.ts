import * as queryString from "query-string";

import { ApiClient } from "../client";
import { Shard, ShardsQuery } from "../types/shard";

export const shardModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all available shards
     */
    shards: (query: ShardsQuery = {}) => {
      return client.get<Shard[]>(`/shards?${queryString.stringify(query)}`);
    },
  };
};
