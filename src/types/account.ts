import {
  ScamInfo,
  CollectionTrait,
  CollectionAuctionStats,
  CollectionRoles,
  TokenAssets,
} from "./";

export type AccountAssets = object;

export interface AccountVerificationSource {
  /** Abi file source */
  abi: object;
  /** Contract source code */
  contract: object;
}

export interface AccountsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by owner address */
  ownerAddress?: string;
  /** Sort criteria (balance / timestamp) */
  sort?: "balance" | "timestamp";
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
}

export interface Account {
  /**
   * Account bech32 address
   * @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz"
   */
  address: string;
  /**
   * Amount
   * Account current balance
   * @example ""5260000000000000000""
   */
  balance: string;
  /**
   * Account current nonce
   * @example 42
   */
  nonce: number;
  /**
   * Timestamp of the block where the account was first indexed
   * @example 1676979360
   */
  timestamp: number;
  /**
   * The shard ID allocated to the account
   * @example 0
   */
  shard: number;
  /** Current owner address */
  ownerAddress: string;
  /** Account assets */
  assets: AccountAssets | null;
}

export interface AccountsCountQuery {
  /** Search by owner address */
  ownerAddress?: string;
}

export interface AccountDetailed {
  /**
   * Account bech32 address
   * @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz"
   */
  address: string;
  /**
   * Amount
   * Account current balance
   * @example ""5260000000000000000""
   */
  balance: string;
  /**
   * Account current nonce
   * @example 42
   */
  nonce: number;
  /**
   * Timestamp of the block where the account was first indexed
   * @example 1676979360
   */
  timestamp: number;
  /**
   * The shard ID allocated to the account
   * @example 0
   */
  shard: number;
  /** The address in bech 32 format of owner account */
  ownerAddress: string;
  /** Account assets */
  assets: AccountAssets | null;
  /** The source code in hex format */
  code: string;
  /** The hash of the source code */
  codeHash: string;
  /** The hash of the root node */
  rootHash: string;
  /** The number of transactions performed on this account */
  txCount: number;
  /** The number of smart contract results of this account */
  scrCount: number;
  /** The username specific for this account */
  username: object | null;
  /** The developer reward */
  developerReward: string;
  /** Specific property flag for smart contract */
  deployedAt: number;
  /** The contract deploy transaction hash */
  deployTxHash: string;
  /** Specific property flag for smart contract */
  isUpgradeable: boolean;
  /** Specific property flag for smart contract */
  isReadable: boolean;
  /** Specific property flag for smart contract */
  isVerified: boolean;
  /** Specific property flag for smart contract */
  isPayable: boolean;
  /** Specific property flag for smart contract */
  isPayableBySmartContract: boolean | null;
  scamInfo: ScamInfo | null;
}

export interface AccountDeferred {
  /**
   * Amount
   * Deferred payment amount
   * @example ""5330000000000000000""
   */
  deferredPayment: string;
  /** Seconds left until unbonding time */
  secondsLeft: number;
}

export interface AccountVerification {
  /** Source code hash */
  codeHash: string;
  /** Source code of contract */
  source: AccountVerificationSource;
  /** Verifier process status */
  status: "success" | "byteCodeChangedSinceLastVerification";
  /** File hash for IPFS */
  ipfsFileHash: string;
}

export interface AccountTokensQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Token type */
  type?: "FungibleESDT" | "MetaESDT";
  /** Search by collection identifier */
  search?: string;
  /** Search by token name */
  name?: string;
  /** Search by token identifier */
  identifier?: string;
  /** A comma-separated list of identifiers to filter by */
  identifiers?: string;
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface AccountTokensCountQuery {
  /** Token type */
  type?: "FungibleESDT" | "MetaESDT";
  /** Search by collection identifier */
  search?: string;
  /** Search by token name */
  name?: string;
  /** Search by token identifier */
  identifier?: string;
  /** A comma-separated list of identifiers to filter by */
  identifiers?: string;
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface AccountRoleCollectionsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /** Filter by collection owner */
  owner?: string;
  /** Filter by property canCreate (boolean) */
  canCreate?: boolean;
  /** Filter by property canBurn (boolean) */
  canBurn?: boolean;
  /** Filter by property canAddQuantity (boolean) */
  canAddQuantity?: boolean;
  /** Filter by property canUpdateAttributes (boolean) */
  canUpdateAttributes?: boolean;
  /** Filter by property canAddUri (boolean) */
  canAddUri?: boolean;
  /** Filter by property canTransferRole (boolean) */
  canTransferRole?: boolean;
  /** Exclude collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface NftCollectionWithRoles {
  collection: string;
  type: "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  name: string;
  ticker: string;
  owner: string | null;
  timestamp: number;
  /** @default false */
  canFreeze: boolean;
  /** @default false */
  canWipe: boolean;
  /** @default false */
  canPause: boolean;
  /** @default false */
  canTransferNftCreateRole: boolean;
  /** @default false */
  canChangeOwner: boolean;
  /** @default false */
  canUpgrade: boolean;
  /** @default false */
  canAddSpecialRoles: boolean;
  decimals: number | null;
  assets: TokenAssets | null;
  scamInfo: ScamInfo | null;
  traits: CollectionTrait[];
  auctionStats: CollectionAuctionStats | null;
  isVerified: boolean | null;
  holderCount: number | null;
  nftCount: number | null;
  role: CollectionRoles;
  canTransfer: boolean;
  /** @default false */
  canCreate: boolean;
  /** @default false */
  canBurn: boolean;
  /** @default false */
  canAddQuantity: boolean;
  /** @default false */
  canUpdateAttributes: boolean;
  /** @default false */
  canAddUri: boolean;
}

export interface AccountRoleCollectionsCountQuery {
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /** Filter by collection owner */
  owner?: string;
  /** Filter by property canCreate (boolean) */
  canCreate?: boolean;
  /** Filter by property canCreate (boolean) */
  canBurn?: boolean;
  /** Filter by property canAddQuantity (boolean) */
  canAddQuantity?: boolean;
  /** Exclude collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface AccountTokenRolesQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by token identifier or name */
  search?: string;
  /** Filter by token owner */
  owner?: string;
  /** Filter by property canMint (boolean) */
  canMint?: boolean;
  /** Filter by property canBurn (boolean) */
  canBurn?: boolean;
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface AccountTokenRolesCountQuery {
  /** Search by token identifier or name */
  search?: string;
  /** Filter by token owner */
  owner?: string;
  /** Filter by property canMint (boolean) */
  canMint?: boolean;
  /** Filter by property canCreate (boolean) */
  canBurn?: boolean;
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface AccountCollectionsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /** Exclude collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface NftCollectionAccount {
  collection: string;
  type: "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  name: string;
  ticker: string;
  owner: string | null;
  timestamp: number;
  /** @default false */
  canFreeze: boolean;
  /** @default false */
  canWipe: boolean;
  /** @default false */
  canPause: boolean;
  /** @default false */
  canTransferNftCreateRole: boolean;
  /** @default false */
  canChangeOwner: boolean;
  /** @default false */
  canUpgrade: boolean;
  /** @default false */
  canAddSpecialRoles: boolean;
  decimals: number | null;
  assets: TokenAssets | null;
  scamInfo: ScamInfo | null;
  traits: CollectionTrait[];
  auctionStats: CollectionAuctionStats | null;
  isVerified: boolean | null;
  holderCount: number | null;
  nftCount: number | null;
  count: number;
}

export interface AccountCollectionsCountQuery {
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /** Exclude collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface AccountNftsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Filter by identifiers, comma-separated */
  identifiers?: string[];
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string;
  /**
   * Get all tokens by token collection. Deprecated, replaced by collections parameter
   * @deprecated
   */
  collection?: string;
  /** Get all tokens by token collections, comma-separated */
  collections?: string[];
  /** Get all nfts by name */
  name?: string;
  /** Filter by one or more comma-separated tags */
  tags?: string[];
  /** Return all NFTs associated with a given creator */
  creator?: string;
  /** Return all NFTs that have one or more uris */
  hasUris?: boolean;
  /** Include NFTs that are flagged or not */
  includeFlagged?: boolean;
  /** Return supply where type = SemiFungibleESDT */
  withSupply?: boolean;
  /** Include scam info in the response */
  withScamInfo?: boolean;
  /** Compute scam info in the response */
  computeScamInfo?: boolean;
  /** Data source of request */
  source?: string;
  /** Exclude NFTs of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
  /** List of fields to filter by */
  fields?: string | string[];
}

export interface NftMedia {
  url: string;
  originalUrl: string;
  thumbnailUrl: string;
  fileType: string;
  fileSize: number;
}

export interface NftMetadataError {
  code:
    | "ipfs_error"
    | "not_found"
    | "timeout"
    | "unknown_error"
    | "invalid_content_type"
    | "json_parse_error"
    | "empty_metadata";
  message: string;
  timestamp: number;
}

export interface NftMetadata {
  description: string;
  fileType: string;
  fileUri: string;
  fileName: string;
  error: NftMetadataError | null;
}

export interface NftRarity {
  rank: number;
  score: number;
}

export interface NftRarities {
  statistical: NftRarity;
  trait: NftRarity;
  jaccardDistances: NftRarity;
  openRarity: NftRarity;
  custom: NftRarity;
}

export interface UnlockMileStoneModel {
  /**
   * Remaining epochs until unlock can be performed
   * @example 42
   */
  remainingEpochs: number;
  /**
   * Percent of token unlockable after the epochs pass
   * @example 42
   */
  percent: number;
}

export interface NftAccount {
  identifier: string;
  collection: string;
  timestamp: number | null;
  attributes: string;
  nonce: number;
  type: "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  name: string;
  creator: string;
  royalties: number | null;
  uris: any[][];
  url: string;
  media: NftMedia | null;
  /** @default false */
  isWhitelistedStorage: boolean;
  thumbnailUrl: string;
  tags: any[][];
  metadata: NftMetadata | null;
  owner: string | null;
  /** @example 10 */
  balance: string | null;
  /**
   * Amount
   * @example ""2490000000000000000""
   */
  supply: string;
  decimals: number | null;
  assets: TokenAssets;
  ticker: string;
  scamInfo: ScamInfo | null;
  score: number | null;
  rank: number | null;
  rarities: NftRarities | null;
  isNsfw: boolean | null;
  unlockSchedule: UnlockMileStoneModel[] | null;
  unlockEpoch: number | null;
  price: number | null;
  valueUsd: number | null;
}

export interface AccountNftsCountQuery {
  /** Filter by identifiers, comma-separated */
  identifiers?: string[];
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string;
  /** Get all tokens by token collection */
  collection?: string;
  /** Get all tokens by token collections, comma-separated */
  collections?: string[];
  /** Get all nfts by name */
  name?: string;
  /** Filter by one or more comma-separated tags */
  tags?: string[];
  /** Return all NFTs associated with a given creator */
  creator?: string;
  /** Return all NFTs that have one or more uris */
  hasUris?: boolean;
  /** Include NFTs that are flagged or not */
  includeFlagged?: boolean;
  /** Exclude NFTs of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface AccountNftDetailsQuery {
  /** List of fields to filter by */
  fields?: string | string[];
  /** Extract a specific field */
  extract?: string;
}

export interface ProviderUnstakedTokens {
  /**
   * Amount
   * @example ""6700000000000000000""
   */
  amount: string;
  expires: number | null;
  epochs: number | null;
}

export interface ProviderStake {
  /**
   * Amount
   * @example ""6820000000000000000""
   */
  totalStaked: string;
  unstakedTokens: ProviderUnstakedTokens[] | null;
}

export interface AccountUndelegation {
  /**
   * Amount
   * @example ""2200000000000000000""
   */
  amount: string;
  seconds: number;
}

export interface AccountDelegation {
  address: string;
  contract: string;
  /**
   * Amount
   * @example ""6460000000000000000""
   */
  userUnBondable: string;
  /**
   * Amount
   * @example ""3470000000000000000""
   */
  userActiveStake: string;
  /**
   * Amount
   * @example ""7640000000000000000""
   */
  claimableRewards: string;
  userUndelegatedList: AccountUndelegation[];
}

export interface AccountDelegationLegacy {
  /** @default 0 */
  claimableRewards: string;
  /** @default 0 */
  userActiveStake: string;
  /** @default 0 */
  userDeferredPaymentStake: string;
  /** @default 0 */
  userUnstakedStake: string;
  /** @default 0 */
  userWaitingStake: string;
  /** @default 0 */
  userWithdrawOnlyStake: string;
}

export interface AccountKey {
  /** @example "2ef384d4d38bf3aad5cef34ce6eab047fba6d52b9735dbfdf7591289ed9c26ac7e816c9bb56ebf4f09129f045860f401275a91009befb4dc8ddc24ea4bc597290bd916b9f984c2a415ec9b2cfbc4a09de42c032314e6a21e69daf76302fcaa99" */
  blsKey: string;
  /**
   * Amount
   * @example ""6420000000000000000""
   */
  stake: string;
  /**
   * Amount
   * @example ""6050000000000000000""
   */
  topUp: string;
  /** @example "online" */
  status: string;
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  rewardAddress: string;
  /** @example "2" */
  queueIndex: string | null;
  /** @example "100" */
  queueSize: string | null;
}

export interface AccountTransactionListQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Address of the transaction sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Identifier of the token */
  token?: string;
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transaction hashes */
  hashes?: string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Filter transactions by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
  fields?: string | string[];
  /** Return scResults for transactions. When "withScresults" parameter is applied, complexity estimation is 200 */
  withScResults?: boolean;
  /** Return operations for transactions. When "withOperations" parameter is applied, complexity estimation is 200 */
  withOperations?: boolean;
  /** Return logs for transactions. When "withLogs" parameter is applied, complexity estimation is 200 */
  withLogs?: boolean;
  /** Returns scam information */
  withScamInfo?: boolean;
  /** Integrates username in assets for all addresses present in the transactions */
  withUsername?: boolean;
  /** Returns sender / receiver block details */
  withBlockInfo?: boolean;
  /** One address that current address interacted with */
  senderOrReceiver?: string;
  computeScamInfo?: boolean;
}

export interface AccountTransactionsCountQuery {
  /** Address of the transaction sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Identifier of the token */
  token?: string;
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transaction hashes */
  hashes?: string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Filter transactions by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountTransfersQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Address of the transfer sender */
  sender?: string[];
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Identifier of the token */
  token?: string;
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transfer hashes */
  hashes?: string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Filter transactions by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
  /** List of fields to filter by */
  fields?: string | string[];
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
  /** Returns scam information */
  withScamInfo?: boolean;
  /** Integrates username in assets for all addresses present in the transactions */
  withUsername?: boolean;
  /** Returns sender / receiver block details */
  withBlockInfo?: boolean;
  /** One address that current address interacted with */
  senderOrReceiver?: string;
}

export interface AccountTransfersCountQuery {
  /** Address of the transfer sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Identifier of the token */
  token?: string;
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transfer hashes */
  hashes?: string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Filter transfers by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountContractsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface DeployedContract {
  address: string;
  deployTxHash: string;
  timestamp: number;
  /** Contract assets */
  assets: AccountAssets | null;
}

export interface AccountUpgradeDetailsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface ContractUpgrades {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string | null;
  /** @example "1c8c6b2148f25621fa2c798a2c9a184df61fdd1991aa0af7ea01eb7b89025d2a" */
  txHash: string | null;
  /** @example "1638577452" */
  timestamp: number | null;
}

export interface AccountContractResultsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface AccountHistoryQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountHistory {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /**
   * Amount
   * @example ""5920000000000000000""
   */
  balance: string;
  /** @example 10000 */
  timestamp: number;
  /** @example true */
  isSender: boolean | null;
}

export interface AccountHistoryCountQuery {
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountTokenHistoryCountQuery {
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountTokenHistoryQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface AccountEsdtHistory {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /**
   * Amount
   * @example ""5920000000000000000""
   */
  balance: string;
  /** @example 10000 */
  timestamp: number;
  /** @example true */
  isSender: boolean | null;
  /** @example "WEGLD-bd4d79" */
  token: string;
  /** @example "XPACHIEVE-5a0519-01" */
  identifier: string;
}
