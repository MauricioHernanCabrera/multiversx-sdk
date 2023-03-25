import { ApiClient } from "../client";
import {
  AccountAuctionsQuery,
  AccountAuctionStats,
  Auction,
  AuctionDetailsQuery,
  Auctions,
  AuctionsCountQuery,
  AuctionsQuery,
  CollectionAuctionsQuery,
  CollectionAuctionStats,
} from "../types";

export const marketplaceModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns auctions available in marketplaces
     *
     * @tags marketplace
     * @request GET:/auctions
     */
    auctions: (query: AuctionsQuery = {}) => {
      return client.get<Auctions[], AuctionsQuery>(`/auctions`, query);
    },

    /**
     * @description Returns all auctions count available on marketplaces
     *
     * @tags marketplace
     * @request GET:/auctions/count
     */
    auctionsCount: (query: AuctionsCountQuery = {}) => {
      return client.get<number, AuctionsCountQuery>(`/auctions/count`, query);
    },

    /**
     * @description Returns auction details for a specific auction identifier
     *
     * @tags marketplace
     * @request GET:/auctions/{id}
     */
    auctionDetails: (id: string, query: AuctionDetailsQuery = {}) => {
      return client.get<Auctions, AuctionDetailsQuery>(
        `/auctions/${id}`,
        query
      );
    },

    /**
     * @description Returns account status details from nft marketplace for a given address
     *
     * @tags marketplace
     * @request GET:/accounts/{address}/auction/stats
     */
    accountStats: (address: string) => {
      return client.get<AccountAuctionStats>(
        `/accounts/${address}/auction/stats`
      );
    },

    /**
     * @description Returns account auctions for a given address
     *
     * @tags marketplace
     * @request GET:/accounts/{address}/auctions
     */
    accountAuctions: (address: string, query: AccountAuctionsQuery = {}) => {
      return client.get<Auction, AccountAuctionsQuery>(
        `/accounts/${address}/auctions`,
        query
      );
    },

    /**
     * @description Returns total running auctions count for a specific address
     *
     * @tags marketplace
     * @request GET:/accounts/{address}/auctions/count
     */
    accountAuctionsCount: (address: string) => {
      return client.get<number>(`/accounts/${address}/auctions/count`);
    },

    /**
     * @description Returns collection status details from nft marketplace for a given collection identifier
     *
     * @tags marketplace
     * @request GET:/collections/{collection}/auction/stats
     */
    collectionStats: (collection: string) => {
      return client.get<CollectionAuctionStats>(
        `/collections/${collection}/auction/stats`
      );
    },

    /**
     * @description Returns all auctions for a specific collection
     *
     * @tags marketplace
     * @request GET:/collections/{collection}/auctions
     */
    collectionAuctions: (
      collection: string,
      query: CollectionAuctionsQuery = {}
    ) => {
      return client.get<Auctions[], CollectionAuctionsQuery>(
        `/collections/${collection}/auctions`,
        query
      );
    },

    /**
     * @description Returns total running auctions count for a specific collection
     *
     * @tags marketplace
     * @request GET:/collections/{collection}/auctions/count
     */
    collectionAuctionsCount: (collection: string) => {
      return client.get<number>(`/collections/${collection}/auctions/count`);
    },
  };
};
