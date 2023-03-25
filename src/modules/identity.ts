import { ApiClient } from "../client";
import { IdentitiesQuery, Identity } from "../types";

export const identityModule = (client: ApiClient) => {
  return {
    /**
     * @description List of all node identities, used to group nodes by the same entity. "Free-floating" nodes that do not belong to any identity will also be returned
     *
     * @tags identity
     * @request GET:/identities
     */
    identities: (query: IdentitiesQuery = {}) => {
      return client.get<Identity[], IdentitiesQuery>(`/identities`, query);
    },

    /**
     * @description Returns the details of a single identity
     *
     * @tags identity
     * @request GET:/identities/{identifier}
     */
    identityDetails: (identifier: string) => {
      return client.get<Identity>(`/identities/${identifier}`);
    },
  };
};
