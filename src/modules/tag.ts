import * as queryString from "query-string";

import { ApiClient } from "../client";
import { NftTagsQuery, Tag, TotalNumberOfNftTagsQuery } from "../types/tag";

export const tagModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all distinct NFT tags
     */
    nftTags: (query: NftTagsQuery = {}) => {
      return client.get<Tag[]>(`/tags?${queryString.stringify(query)}`);
    },

    /**
     * @description Returns total number of distinct NFT Tags available on blockchain
     */
    totalNumberOfNftTags: (query: TotalNumberOfNftTagsQuery = {}) => {
      return client.get<number>(`/tags/count?${queryString.stringify(query)}`);
    },

    /**
     * @description Return NFT tag details
     */
    tagDetails: (tag: string) => {
      return client.get<Tag>(`/tags/${tag}`);
    },
  };
};
