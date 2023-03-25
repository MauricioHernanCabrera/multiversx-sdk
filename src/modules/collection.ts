import { ApiClient } from "../client";
import {
  CollectionAccount,
  CollectionAccountsQuery,
  CollectionNftsCountQuery,
  CollectionNftsQuery,
  CollectionsCountQuery,
  CollectionsQuery,
  CollectionTransactionsCountQuery,
  CollectionTransactionsQuery,
  Nft,
  NftCollection,
  NftCollectionDetailed,
  NftRank,
  Transaction,
} from "../types";

export const collectionModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collections
     *
     * @tags collection
     * @request GET:/collections
     */
    collections: (query: CollectionsQuery = {}) => {
      return client.get<NftCollection[], CollectionsQuery>(
        `/collections`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collection count
     *
     * @tags collection
     * @request GET:/collections/count
     */
    collectionsCount: (query: CollectionsCountQuery = {}) => {
      return client.get<number, CollectionsCountQuery>(
        `/collections/count`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collection details
     *
     * @tags collection
     * @request GET:/collections/{collection}
     */
    collectionDetails: (collection: string) => {
      return client.get<NftCollectionDetailed>(`/collections/${collection}`);
    },

    /**
     * @description Returns NFT ranks in case the custom ranking preferred algorithm was set
     *
     * @tags collection
     * @request GET:/collections/{collection}/ranks
     */
    collectionRanks: (collection: string) => {
      return client.get<NftRank[]>(`/collections/${collection}/ranks`);
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt tokens that belong to a collection
     *
     * @tags collection
     * @request GET:/collections/{collection}/nfts
     */
    collectionNfts: (collection: string, query: CollectionNftsQuery = {}) => {
      return client.get<Nft[], CollectionNftsQuery>(
        `/collections/${collection}/nfts`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt token count that belong to a collection
     *
     * @tags collection
     * @request GET:/collections/{collection}/nfts/count
     */
    collectionNftsCount: (
      collection: string,
      query: CollectionNftsCountQuery = {}
    ) => {
      return client.get<number, CollectionNftsCountQuery>(
        `/collections/${collection}/nfts/count`,
        query
      );
    },

    /**
     * @description Returns a list of addresses and balances for a specific collection
     *
     * @tags collection
     * @request GET:/collections/{collection}/accounts
     */
    collectionAccounts: (
      collection: string,
      query: CollectionAccountsQuery = {}
    ) => {
      return client.get<CollectionAccount[], CollectionAccountsQuery>(
        `/collections/${collection}/accounts`,
        query
      );
    },

    /**
     * @description Returns a list of transactions for a specific collection.
     *
     * @tags collection
     * @request GET:/collections/{collection}/transactions
     */
    collectionTransactions: (
      collection: string,
      query: CollectionTransactionsQuery = {}
    ) => {
      return client.get<Transaction[], CollectionTransactionsQuery>(
        `/collections/${collection}/transactions`,
        query
      );
    },

    /**
     * @description Returns the total number of transactions for a specific collection
     *
     * @tags collection
     * @request GET:/collections/{collection}/transactions/count
     */
    collectionTransactionsCount: (
      collection: string,
      query: CollectionTransactionsCountQuery = {}
    ) => {
      return client.get<number, CollectionTransactionsCountQuery>(
        `/collections/${collection}/transactions/count`,
        query
      );
    },
  };
};
