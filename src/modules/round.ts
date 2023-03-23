import * as queryString from "query-string";

import { ApiClient } from "../client";
import {
  RoundsQuery,
  Round,
  RoundsCountQuery,
  RoundDetailed,
} from "../types/round";

export const roundModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all rounds available on blockchain
     */
    rounds: (query: RoundsQuery = {}) => {
      return client.get<Round[]>(`/rounds?${queryString.stringify(query)}`);
    },

    /**
     * @description Returns total number of rounds
     */
    roundsCount: (query: RoundsCountQuery = {}) => {
      return client.get<number>(
        `/rounds/count?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns details of a given round from a specific shard
     */
    roundDetails: (shard: number, round: number) => {
      return client.get<RoundDetailed>(`/rounds/${shard}/${round}`);
    },
  };
};
