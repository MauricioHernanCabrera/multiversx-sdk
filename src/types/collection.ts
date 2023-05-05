import {
  NftMedia,
  NftMetadata,
  NftRarities,
  TokenAssets,
  UnlockMileStoneModel,
  ScamInfo,
} from "./";

export interface CollectionTraitAttribute {
  name: string;
  occurrenceCount: number;
  occurrencePercentage: number;
}

export interface CollectionTrait {
  name: string;
  occurrenceCount: number;
  occurrencePercentage: number;
  attributes: CollectionTraitAttribute[];
}

export interface CollectionAuctionStats {
  activeAuctions: number;
  endedAuctions: number;
  maxPrice: string;
  minPrice: string;
  saleAverage: string;
  volumeTraded: string;
}

export interface CollectionRoles {
  address: string | null;
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
  /** @default false */
  canTransfer: boolean;
  roles: string[];
}

export interface CollectionsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Search by collection identifiers, comma-separated */
  identifiers?: string[];
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /**
   * Filter collections where the given address has a creator role
   * @deprecated
   */
  creator?: string;
  /** Return all collections before given timestamp */
  before?: number;
  /** Return all collections after given timestamp */
  after?: number;
  /** Filter by address with canCreate role */
  canCreate?: string;
  /** Filter by address with canBurn role */
  canBurn?: string;
  /** Filter by address with canAddQuantity role */
  canAddQuantity?: string;
  /** Filter by address with canUpdateAttributes role */
  canUpdateAttributes?: string;
  /** Filter by address with canAddUri role */
  canAddUri?: string;
  /** Filter by address with canTransferRole role */
  canTransferRole?: string;
  /** Do not include collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
  /** Sorting criteria */
  sort?: "timestamp" | "verifiedAndHolderCount";
  /** Sorting order (asc / desc) */
  order?: "asc" | "desc";
}

export interface NftCollection {
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
}

export interface CollectionsCountQuery {
  /** Search by collection identifier */
  search?: string;
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /**
   * Filter collections where the given address has a creator role
   * @deprecated
   */
  creator?: string;
  /** Return all collections before given timestamp */
  before?: number;
  /** Return all collections after given timestamp */
  after?: number;
  /** Filter by address with canCreate role */
  canCreate?: string;
  /** Filter by address with canBurn role */
  canBurn?: string;
  /** Filter by address with canAddQuantity role */
  canAddQuantity?: string;
  /** Filter by address with canUpdateAttributes role */
  canUpdateAttributes?: string;
  /** Filter by address with canAddUri role */
  canAddUri?: string;
  /** Filter by address with canTransferRole role */
  canTransferRole?: string;
  /** Do not include collections of type "MetaESDT" in the response */
  excludeMetaESDT?: boolean;
}

export interface NftCollectionDetailed {
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
  canTransfer: boolean | null;
  roles: CollectionRoles[];
}

export interface NftRank {
  identifier: string;
  rank: number;
}

export interface CollectionNftsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Search by token identifiers, comma-separated */
  identifiers?: string[];
  /** Get all nfts by name */
  name?: string;
  /** Filter by one or more comma-separated tags */
  tags?: string[];
  /** Return all NFTs associated with a given creator */
  creator?: string;
  /** Return all NFTs that are whitelisted in storage */
  isWhitelistedStorage?: boolean;
  /** Return all NFTs that have one or more uris */
  hasUris?: boolean;
  /** Filter by NSFW status */
  isNsfw?: boolean;
  /** Return all NFTs with given nonce before the given number */
  nonceBefore?: number;
  /** Return all NFTs with given nonce after the given number */
  nonceAfter?: number;
  /** Return owner where type = NonFungibleESDT */
  withOwner?: boolean;
  /** Return supply where type = SemiFungibleESDT */
  withSupply?: boolean;
  withScamInfo?: boolean;
  computeScamInfo?: boolean;
  /** Sorting criteria */
  sort?: "timestamp" | "rank" | "nonce";
  /** Sorting order (asc / desc) */
  order?: "asc" | "desc";
  /** Filter NFTs by traits. Key-value format (<key1>:<value1>;<key2>:<value2>) */
  traits?: boolean;
}

export interface Nft {
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
}

export interface CollectionNftsCountQuery {
  /** Search by collection identifier */
  search?: string;
  /** Search by token identifiers, comma-separated */
  identifiers?: string[];
  /** Get all nfts by name */
  name?: string;
  /** Filter by one or more comma-separated tags */
  tags?: string[];
  /** Return all NFTs associated with a given creator */
  creator?: string;
  /** Return all NFTs that are whitelisted in storage */
  isWhitelistedStorage?: boolean;
  /** Return all NFTs that have one or more uris */
  hasUris?: boolean;
  /** Return all NFTs with given nonce before the given number */
  nonceBefore?: number;
  /** Return all NFTs with given nonce after the given number */
  nonceAfter?: number;
  /** Filter NFTs by traits. Key-value format (<key1>:<value1>;<key2>:<value2>) */
  traits?: boolean;
}

export interface CollectionAccountsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface CollectionAccount {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /** @default "1" */
  balance: string;
}

export interface CollectionTransactionsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Address of the transaction sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transaction hashes */
  hashes?: string | string[];
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
  /** Return scResults for transactions */
  withScResults?: boolean;
  /** Return operations for transactions */
  withOperations?: boolean;
  /** Return logs for transactions */
  withLogs?: boolean;
  /** Returns scam information */
  withScamInfo?: boolean;
  /** Integrates username in assets for all addresses present in the transactions */
  withUsername?: boolean;
}

export interface CollectionTransactionsCountQuery {
  /** Address of the transaction sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transaction hashes */
  hashes?: string | string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}
