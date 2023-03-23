import { ApiClient } from "../client";
import { NftTagsQuery, Tag, TotalNumberOfNftTagsQuery } from "../types";

export const tagModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all distinct NFT tags
     */
    nftTags: (query: NftTagsQuery = {}) => {
      return client.get<Tag[], NftTagsQuery>(`/tags`, query);
    },

    /**
     * @description Returns total number of distinct NFT Tags available on blockchain
     */
    totalNumberOfNftTags: (query: TotalNumberOfNftTagsQuery = {}) => {
      return client.get<number, TotalNumberOfNftTagsQuery>(
        `/tags/count`,
        query
      );
    },

    /**
     * @description Return NFT tag details
     */
    tagDetails: (tag: string) => {
      return client.get<Tag>(`/tags/${tag}`);
    },
  };
};
