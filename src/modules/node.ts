import * as queryString from "query-string";

import { ApiClient } from "../client";
import { Node, NodesCountQuery, NodesQuery, NodeVersion } from "../types/node";

export const nodeModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of nodes of type observer or validator
     */
    nodes: (query: NodesQuery = {}) => {
      return client.get<Node[]>(`/nodes?${queryString.stringify(query)}`);
    },

    /**
     * @description Returns breakdown of node versions for validator nodes
     */
    nodeVersions: () => {
      return client.get<NodeVersion>(`/nodes/versions`);
    },

    /**
     * @description Returns number of all observer/validator nodes available on blockchain
     */
    nodesCount: (query: NodesCountQuery = {}) => {
      return client.get<number>(`/nodes/count?${queryString.stringify(query)}`);
    },

    /**
     * @description Returns details about a specific node for a given bls key
     */
    nodeDetails: (bls: string) => {
      return client.get<Node>(`/nodes/${bls}`);
    },
  };
};
