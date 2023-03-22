import * as queryString from "query-string";

import { ApiClient } from "../client";
import { IdentitiesQuery, Identity } from "../types/identity";

export const identityModule = (client: ApiClient) => {
  return {
    /**
     * @description List of all node identities, used to group nodes by the same entity. "Free-floating" nodes that do not belong to any identity will also be returned
     */
    identities: (query: IdentitiesQuery = {}) => {
      return client.get<Identity[]>(
        `/identities?${queryString.stringify(query)}`
      );
    },

    /**
     * @description Returns the details of a single identity
     */
    identityDetails: (identifier: string) => {
      return client.get<Identity>(`/identities/${identifier}`);
    },
  };
};
