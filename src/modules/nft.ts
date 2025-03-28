import { ApiClient } from "../helpers/client";
import { NftDetails, NftQuery } from "../types";

export const nftModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collections
     *
     * @tags collection
     * @request GET:/collections
     */
    nfts: (query: NftQuery = {}) => {
      return client.get<NftDetails[], NftQuery>(
        `/nfts`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collection details
     *
     * @tags collection
     * @request GET:/collections/{collection}
     */
    nftDetails: (nft: string) => {
      return client.get<NftDetails>(`/nfts/${nft}`);
    },
  };
};
