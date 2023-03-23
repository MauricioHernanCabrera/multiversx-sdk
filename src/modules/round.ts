import { ApiClient } from "../client";
import { RoundsQuery, Round, RoundsCountQuery, RoundDetailed } from "../types";

export const roundModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all rounds available on blockchain
     */
    rounds: (query: RoundsQuery = {}) => {
      return client.get<Round[], RoundsQuery>(`/rounds`, query);
    },

    /**
     * @description Returns total number of rounds
     */
    roundsCount: (query: RoundsCountQuery = {}) => {
      return client.get<number, RoundsCountQuery>(`/rounds/count`, query);
    },

    /**
     * @description Returns details of a given round from a specific shard
     */
    roundDetails: (shard: number, round: number) => {
      return client.get<RoundDetailed>(`/rounds/${shard}/${round}`);
    },
  };
};
