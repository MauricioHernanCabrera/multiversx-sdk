import { ApiClient } from "../client";
import { RoundsQuery, Round, RoundsCountQuery, RoundDetailed } from "../types";

export const roundModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of all rounds available on blockchain
     *
     * @tags rounds
     * @request GET:/rounds
     */
    rounds: (query: RoundsQuery = {}) => {
      return client.get<Round[], RoundsQuery>(`/rounds`, query);
    },

    /**
     * @description Returns total number of rounds
     *
     * @tags rounds
     * @request GET:/rounds/count
     */
    roundsCount: (query: RoundsCountQuery = {}) => {
      return client.get<number, RoundsCountQuery>(`/rounds/count`, query);
    },

    /**
     * @description Returns details of a given round from a specific shard
     *
     * @tags rounds
     * @request GET:/rounds/{shard}/{round}
     */
    roundDetails: (shard: number, round: number) => {
      return client.get<RoundDetailed>(`/rounds/${shard}/${round}`);
    },
  };
};
