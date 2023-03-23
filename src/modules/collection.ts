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
     */
    collections: (query: CollectionsQuery = {}) => {
      return client.get<NftCollection[], CollectionsQuery>(
        `/collections`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collection count
     */
    collectionsCount: (query: CollectionsCountQuery = {}) => {
      return client.get<number, CollectionsCountQuery>(
        `/collections/count`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt collection details
     */
    collectionDetails: (collection: string) => {
      return client.get<NftCollectionDetailed>(`/collections/${collection}`);
    },

    /**
     * @description Returns NFT ranks in case the custom ranking preferred algorithm was set
     */
    collectionRanks: (collection: string) => {
      return client.get<NftRank[]>(`/collections/${collection}/ranks`);
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt tokens that belong to a collection
     */
    collectionNfts: (collection: string, query: CollectionNftsQuery = {}) => {
      return client.get<Nft[], CollectionNftsQuery>(
        `/collections/${collection}/nfts`,
        query
      );
    },

    /**
     * @description Returns non-fungible/semi-fungible/meta-esdt token count that belong to a collection
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
