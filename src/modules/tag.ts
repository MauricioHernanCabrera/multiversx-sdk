import { ApiClient } from "../client";
import { NftTagsQuery, Tag, NftTagsCountQuery } from "../types";

export const tagModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all distinct NFT tags
     *
     * @tags tag
     * @request GET:/tags
     */
    nftTags: (query: NftTagsQuery = {}) => {
      return client.get<Tag[], NftTagsQuery>(`/tags`, query);
    },

    /**
     * @description Returns total number of distinct NFT Tags available on blockchain
     *
     * @tags tag
     * @request GET:/tags/count
     */
    nftTagsCount: (query: NftTagsCountQuery = {}) => {
      return client.get<number, NftTagsCountQuery>(`/tags/count`, query);
    },

    /**
     * @description Return NFT tag details
     *
     * @tags tag
     * @request GET:/tags/{tag}
     */
    nftTagDetails: (tag: string) => {
      return client.get<Tag>(`/tags/${tag}`);
    },
  };
};
