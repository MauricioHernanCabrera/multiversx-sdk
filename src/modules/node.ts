import { ApiClient } from "../client";
import { Node, NodesCountQuery, NodesQuery, NodeVersion } from "../types";

export const nodeModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns a list of nodes of type observer or validator
     *
     * @tags node
     * @request GET:/nodes
     */
    nodes: (query: NodesQuery = {}) => {
      return client.get<Node[], NodesQuery>(`/nodes`, query);
    },

    /**
     * @description Returns breakdown of node versions for validator nodes
     *
     * @tags node
     * @request GET:/nodes/versions
     */
    nodeVersions: () => {
      return client.get<NodeVersion>(`/nodes/versions`);
    },

    /**
     * @description Returns number of all observer/validator nodes available on blockchain
     *
     * @tags node
     * @request GET:/nodes/count
     */
    nodesCount: (query: NodesCountQuery = {}) => {
      return client.get<number, NodesCountQuery>(`/nodes/count`, query);
    },

    /**
     * @description Returns details about a specific node for a given bls key
     *
     * @tags node
     * @request GET:/nodes/{bls}
     */
    nodeDetails: (bls: string) => {
      return client.get<Node>(`/nodes/${bls}`);
    },
  };
};
