import { ApiClient } from "../client";
import {
  Account,
  AccountsQuery,
  AccountsCountQuery,
  AccountDetailed,
  AccountDeferred,
  AccountVerification,
  TokenWithBalance,
  AccountTokensQuery,
  AccountTokensCountQuery,
  AccountCollectionsQuery,
  NftCollectionWithRoles,
  TokenWithRoles,
  AccountTokenRolesQuery,
  AccountTokenRolesCountQuery,
  AccountRoleCollectionsQuery,
  AccountRoleCollectionsCountQuery,
  NftCollectionAccount,
  AccountCollectionsCountQuery,
  AccountNftsQuery,
  NftAccount,
  AccountNftsCountQuery,
  AccountNftDetailsQuery,
  ProviderStake,
  AccountDelegation,
  AccountDelegationLegacy,
  AccountKey,
  WaitingList,
  Transaction,
  AccountTransactionListQuery,
  AccountTransactionsCountQuery,
  AccountTransfersQuery,
  AccountTransfersCountQuery,
  AccountContractsQuery,
  DeployedContract,
  AccountUpgradeDetailsQuery,
  ContractUpgrades,
  SmartContractResult,
  AccountContractResultsQuery,
  AccountHistoryQuery,
  AccountHistory,
  AccountHistoryCountQuery,
  AccountTokenHistoryCountQuery,
  AccountTokenHistoryQuery,
  AccountEsdtHistory,
} from "../types";

export const accountModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns all accounts available on blockchain. By default it returns 25 accounts
     */
    accounts: (query: AccountsQuery = {}) => {
      return client.get<Account[], AccountsQuery>(`/accounts`, query);
    },

    /**
     * @description Returns total number of accounts available on blockchain
     */
    accountsCount: (query: AccountsCountQuery = {}) => {
      return client.get<number, AccountsCountQuery>(`/accounts/count`, query);
    },

    /**
     * @description Returns account details for a given address
     */
    accountDetails: (address: string) => {
      return client.get<AccountDetailed>(`/accounts/${address}`);
    },

    /**
     * @description Returns deferred payments from legacy staking
     */
    accountDeferredPaymentDetails: (address: string) => {
      return client.get<AccountDeferred[]>(`/accounts/${address}/deferred`);
    },

    /**
     * @description Returns contract verification details
     */
    accountVerificationDetails: (address: string) => {
      return client.get<AccountVerification>(
        `/accounts/${address}/verification`
      );
    },

    /**
     * @description Returns a list of all available fungible tokens for a given address, together with their balance
     */
    accountTokens: (address: string, query: AccountTokensQuery = {}) => {
      return client.get<TokenWithBalance[], AccountTokensQuery>(
        `/accounts/${address}/tokens`,
        query
      );
    },

    /**
     * @description Returns the total number of tokens for a given address
     */
    accountTokensCount: (address: string, query: AccountTokensCountQuery) => {
      return client.get<number, AccountTokensCountQuery>(
        `/accounts/${address}/tokens/count`,
        query
      );
    },

    /**
     * @description Returns details about a specific fungible token from a given address
     */
    accountTokenDetails: (address: string, token: string) => {
      return client.get<TokenWithBalance>(
        `/accounts/${address}/tokens/${token}`
      );
    },

    /**
     * @description Returns NFT/SFT/MetaESDT collections where the account is owner or has some special roles assigned to it
     */
    accountRoleCollections: (
      address: string,
      query: AccountRoleCollectionsQuery = {}
    ) => {
      return client.get<NftCollectionWithRoles[], AccountRoleCollectionsQuery>(
        `/accounts/${address}/roles/collections`,
        query
      );
    },

    /**
     * @description Returns the total number of NFT/SFT/MetaESDT collections where the account is owner or has some special roles assigned to it
     */
    accountRoleCollectionsCount: (
      address: string,
      query: AccountRoleCollectionsCountQuery = {}
    ) => {
      return client.get<number, AccountRoleCollectionsCountQuery>(
        `/accounts/${address}/roles/collections/count`,
        query
      );
    },

    /**
     * @description Returns details about a specific NFT/SFT/MetaESDT collection from a given address
     */
    accountRoleCollectionDetails: (address: string, collection: string) => {
      return client.get<NftCollectionWithRoles>(
        `/accounts/${address}/roles/collections/${collection}`
      );
    },

    /**
     * @description Returns fungible token roles where the account is owner or has some special roles assigned to it
     */
    accountTokenRoles: (
      address: string,
      query: AccountTokenRolesQuery = {}
    ) => {
      return client.get<TokenWithRoles[], AccountTokenRolesQuery>(
        `/accounts/${address}/roles/tokens`,
        query
      );
    },

    /**
     * @description Returns the total number of fungible token roles where the account is owner or has some special roles assigned to it
     */
    accountTokenRolesCount: (
      address: string,
      query: AccountTokenRolesCountQuery = {}
    ) => {
      return client.get<number, AccountTokenRolesCountQuery>(
        `/accounts/${address}/roles/tokens/count`,
        query
      );
    },

    /**
     * @description Returns details about fungible token roles where the account is owner or has some special roles assigned to it
     */
    accountTokenRoleDetails: (address: string, identifier: string) => {
      return client.get<TokenWithRoles>(
        `/accounts/${address}/roles/tokens/${identifier}`
      );
    },

    /**
     * @description Returns NFT/SFT/MetaESDT collections where the account owns one or more NFTs
     */
    accountCollections: (
      address: string,
      query: AccountCollectionsQuery = {}
    ) => {
      return client.get<NftCollectionAccount[], AccountCollectionsQuery>(
        `/accounts/${address}/collections`,
        query
      );
    },

    /**
     * @description Returns the total number of NFT/SFT/MetaESDT collections where the account is owner or has some special roles assigned to it
     */
    accountCollectionsCount: (
      address: string,
      query: AccountCollectionsCountQuery = {}
    ) => {
      return client.get<number, AccountCollectionsCountQuery>(
        `/accounts/${address}/collections/count`,
        query
      );
    },

    /**
     * @description Returns details about a specific NFT/SFT/MetaESDT collection from a given address
     */
    accountCollectionDetails: (address: string, collection: string) => {
      return client.get<NftCollectionAccount>(
        `/accounts/${address}/collections/${collection}`
      );
    },

    /**
     * @description Returns a list of all available NFTs/SFTs/MetaESDTs owned by the provided address
     */
    accountNfts: (address: string, query: AccountNftsQuery = {}) => {
      return client.get<NftAccount[], AccountNftsQuery>(
        `/accounts/${address}/nfts`,
        query
      );
    },

    /**
     * @description Returns the total number of NFT/SFT tokens from a given address, as well as the total number of a certain type of ESDT
     */
    accountNftsCount: (address: string, query: AccountNftsCountQuery = {}) => {
      return client.get<number, AccountNftsCountQuery>(
        `/accounts/${address}/nfts/count`,
        query
      );
    },

    /**
     * @description Returns details about a specific fungible token for a given address
     */
    accountNftDetails: (
      address: string,
      nft: string,
      query: AccountNftDetailsQuery = {}
    ) => {
      return client.get<NftAccount, AccountNftDetailsQuery>(
        `/accounts/${address}/nfts/${nft}`,
        query
      );
    },

    /**
     * @description Summarizes total staked amount for the given provider, as well as when and how much unbond will be performed
     */
    accountStakeDetails: (address: string) => {
      return client.get<ProviderStake>(`/accounts/${address}/stake`);
    },

    /**
     * @description Summarizes all delegation positions with staking providers, together with unDelegation positions
     */
    accountDelegations: (address: string) => {
      return client.get<AccountDelegation[]>(`/accounts/${address}/delegation`);
    },

    /**
     * @description Returns staking information related to the legacy delegation pool
     */
    accountLegacyDelegationDetails: (address: string) => {
      return client.get<AccountDelegationLegacy>(
        `/accounts/${address}/delegation-legacy`
      );
    },

    /**
     * @description Returns all active / queued nodes where the account is owner
     */
    accountKeys: (address: string) => {
      return client.get<AccountKey[]>(`/accounts/${address}/keys`);
    },

    /**
     * @description Returns all nodes in the node queue where the account is owner
     */
    accountWaitingList: (address: string) => {
      return client.get<WaitingList[]>(`/accounts/${address}/waiting-list`);
    },

    /**
     * @description Returns details of all transactions where the account is sender or receiver
     */
    accountTransactionList: (
      address: string,
      query: AccountTransactionListQuery = {}
    ) => {
      return client.get<Transaction[], AccountTransactionListQuery>(
        `/accounts/${address}/transactions`,
        query
      );
    },

    /**
     * @description Returns total number of transactions for a given address where the account is sender or receiver, as well as total transactions count that have a certain status
     */
    accountTransactionsCount: (
      address: string,
      query: AccountTransactionsCountQuery = {}
    ) => {
      return client.get<number, AccountTransactionsCountQuery>(
        `/accounts/${address}/transactions/count`,
        query
      );
    },

    /**
     * @description Returns both transfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult), thus providing a full picture of all in/out value transfers for a given account
     */
    accountTransfers: (address: string, query: AccountTransfersQuery = {}) => {
      return client.get<Transaction[], AccountTransfersQuery>(
        `/accounts/${address}/transfers`,
        query
      );
    },

    /**
     * @description Return total count of tranfers triggerred by a user account (type = Transaction), as well as transfers triggerred by smart contracts (type = SmartContractResult)
     */
    accountTransfersCount: (
      address: string,
      query: AccountTransfersCountQuery = {}
    ) => {
      return client.get<number, AccountTransfersCountQuery>(
        `/accounts/${address}/transfers/count`,
        query
      );
    },

    /**
     * @description Returns smart contracts details for a given account
     */
    accountContracts: (address: string, query: AccountContractsQuery = {}) => {
      return client.get<DeployedContract[], AccountContractsQuery>(
        `/accounts/${address}/contracts`,
        query
      );
    },

    /**
     * @description Returns total number of deployed contracts for a given address
     */
    accountContractsCount: (address: string) => {
      return client.get<number>(`/accounts/${address}/contracts/count`);
    },

    /**
     * @description Returns all upgrades details for a specific contract address
     */
    accountUpgradeDetails: (
      address: string,
      query: AccountUpgradeDetailsQuery = {}
    ) => {
      return client.get<ContractUpgrades, AccountUpgradeDetailsQuery>(
        `/accounts/${address}/upgrades`,
        query
      );
    },

    /**
     * @description Returns smart contract results where the account is sender or receiver
     */
    accountContractResults: (
      address: string,
      query: AccountContractResultsQuery = {}
    ) => {
      return client.get<SmartContractResult[], AccountContractResultsQuery>(
        `/accounts/${address}/results`,
        query
      );
    },

    /**
     * @description Returns number of smart contract results where the account is sender or receiver
     */
    accountContractResultsCount: (address: string) => {
      return client.get<number>(`/accounts/${address}/results/count`);
    },

    /**
     * @description Returns details of a smart contract result where the account is sender or receiver
     */
    accountContractResultDetails: (address: string, scHash: string) => {
      return client.get<SmartContractResult>(
        `/accounts/${address}/results/${scHash}`
      );
    },

    /**
     * @description Return account EGLD balance history
     */
    accountHistory: (address: string, query: AccountHistoryQuery = {}) => {
      return client.get<AccountHistory[], AccountHistoryQuery>(
        `/accounts/${address}/history`,
        query
      );
    },

    /**
     * @description Return account EGLD balance history count
     */
    accountHistoryCount: (
      address: string,
      query: AccountHistoryCountQuery = {}
    ) => {
      return client.get<number, AccountHistoryCountQuery>(
        `/accounts/${address}/history/count`,
        query
      );
    },

    /**
     * @description Return account token balance history count
     */
    accountTokenHistoryCount: (
      address: string,
      tokenIdentifier: string,
      query: AccountTokenHistoryCountQuery = {}
    ) => {
      return client.get<number, AccountTokenHistoryCountQuery>(
        `/accounts/${address}/history/${tokenIdentifier}/count`,
        query
      );
    },

    /**
     * @description Returns account token balance history
     */
    accountTokenHistory: (
      address: string,
      tokenIdentifier: string,
      query: AccountTokenHistoryQuery = {}
    ) => {
      return client.get<AccountEsdtHistory[], AccountTokenHistoryQuery>(
        `/accounts/${address}/history/${tokenIdentifier}`,
        query
      );
    },
  };
};
