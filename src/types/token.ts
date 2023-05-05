export interface TokenAssets {
  website: string;
  description: string;
  /** @default "inactive" */
  status: "active" | "inactive";
  pngUrl: string;
  svgUrl: string;
  ledgerSignature: string;
  lockedAccounts: string;
  extraTokens: string[];
  preferredRankAlgorithm:
    | "trait"
    | "statistical"
    | "openRarity"
    | "jaccardDistances"
    | "custom"
    | null;
  priceSource: number | null;
}

export interface TokenWithBalance {
  type: "FungibleESDT" | "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  identifier: string;
  collection: string | null;
  nonce: number | null;
  name: string;
  ticker: string;
  owner: string;
  /**
   * Amount
   * @example ""9340000000000000000""
   */
  minted: string;
  /**
   * Amount
   * @example ""780000000000000000""
   */
  burnt: string;
  /**
   * Amount
   * @example ""7200000000000000000""
   */
  initialMinted: string;
  decimals: number;
  /** @default false */
  isPaused: boolean;
  assets: TokenAssets | null;
  transactions: number | null;
  accounts: number | null;
  /** @default false */
  canUpgrade: boolean;
  canMint: boolean | null;
  canBurn: boolean | null;
  canChangeOwner: boolean | null;
  canAddSpecialRoles: boolean | null;
  /** @default false */
  canPause: boolean;
  canFreeze: boolean | null;
  /** @default false */
  canWipe: boolean;
  canTransferNftCreateRole: boolean | null;
  price: number | null;
  marketCap: number | null;
  /**
   * Amount
   * Supply amount
   * @example ""4100000000000000000""
   */
  supply: string;
  /**
   * Amount
   * Circulating supply amount
   * @example ""3360000000000000000""
   */
  circulatingSupply: string;
  /** Creation timestamp */
  timestamp: number;
  /**
   * Amount
   * @example ""2100000000000000000""
   */
  balance: string;
  valueUsd: number | null;
  attributes: string | null;
}
export interface TokenRoles {
  address: string | null;
  canLocalMint: boolean | null;
  canLocalBurn: boolean | null;
  canCreate: boolean | null;
  canBurn: boolean | null;
  canAddQuantity: boolean | null;
  canUpdateAttributes: boolean | null;
  canAddUri: boolean | null;
  canTransfer: boolean | null;
  roles: string[];
}

export interface TokenWithRoles {
  type: "FungibleESDT" | "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  identifier: string;
  collection: string | null;
  nonce: number | null;
  name: string;
  ticker: string;
  owner: string;
  /**
   * Amount
   * @example ""9340000000000000000""
   */
  minted: string;
  /**
   * Amount
   * @example ""780000000000000000""
   */
  burnt: string;
  /**
   * Amount
   * @example ""7200000000000000000""
   */
  initialMinted: string;
  decimals: number;
  /** @default false */
  isPaused: boolean;
  assets: TokenAssets | null;
  transactions: number | null;
  accounts: number | null;
  /** @default false */
  canUpgrade: boolean;
  canMint: boolean | null;
  canBurn: boolean | null;
  canChangeOwner: boolean | null;
  canAddSpecialRoles: boolean | null;
  /** @default false */
  canPause: boolean;
  canFreeze: boolean | null;
  /** @default false */
  canWipe: boolean;
  canTransferNftCreateRole: boolean | null;
  price: number | null;
  marketCap: number | null;
  /**
   * Amount
   * Supply amount
   * @example ""4100000000000000000""
   */
  supply: string;
  /**
   * Amount
   * Circulating supply amount
   * @example ""3360000000000000000""
   */
  circulatingSupply: string;
  /** Creation timestamp */
  timestamp: number;
  role: TokenRoles;
  address: string | null;
  canLocalMint: boolean | null;
  canLocalBurn: boolean | null;
  canCreate: boolean | null;
  canAddQuantity: boolean | null;
  canUpdateAttributes: boolean | null;
  canAddUri: boolean | null;
  canTransfer: boolean | null;
}

export interface TokensQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Token type */
  type?: "FungibleESDT" | "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  /** Search by collection identifier */
  search?: string;
  /** Search by token name */
  name?: string;
  /** Search by token identifier */
  identifier?: string;
  /** Search by multiple token identifiers, comma-separated */
  identifiers?: string | string[];
  /** Sorting criteria */
  sort?: "accounts" | "transactions" | "price" | "marketCap";
  /** Sorting order (asc / desc) */
  order?: "asc" | "desc";
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface TokenDetailed {
  type: "FungibleESDT" | "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  identifier: string;
  collection: string | null;
  nonce: number | null;
  name: string;
  ticker: string;
  owner: string;
  /**
   * Amount
   * Minted amount
   * @example ""2340000000000000000""
   */
  minted: string;
  /**
   * Amount
   * Burnt amount
   * @example ""4720000000000000000""
   */
  burnt: string;
  /**
   * Amount
   * Initial minted amount
   * @example ""3710000000000000000""
   */
  initialMinted: string;
  decimals: number;
  /** @default false */
  isPaused: boolean;
  assets: TokenAssets | null;
  transactions: number | null;
  accounts: number | null;
  /** @default false */
  canUpgrade: boolean;
  canMint: boolean | null;
  canBurn: boolean | null;
  canChangeOwner: boolean | null;
  canAddSpecialRoles: boolean | null;
  /** @default false */
  canPause: boolean;
  canFreeze: boolean | null;
  /** @default false */
  canWipe: boolean;
  canTransferNftCreateRole: boolean | null;
  price: number | null;
  marketCap: number | null;
  /**
   * Amount
   * Supply amount
   * @example ""1110000000000000000""
   */
  supply: string;
  /**
   * Amount
   * Circulating supply amount
   * @example ""2180000000000000000""
   */
  circulatingSupply: string;
  /** Creation timestamp */
  timestamp: number;
  roles: TokenRoles[] | null;
  canTransfer: boolean | null;
}

export interface TokensCountQuery {
  /** Search by collection identifier */
  search?: string;
  /** Search by token name */
  name?: string;
  /** Token type */
  type?: "FungibleESDT" | "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  /** Search by token identifier */
  identifier?: string;
  /** Search by multiple token identifiers, comma-separated */
  identifiers?: string | string[];
  /** Include MetaESDTs in response */
  includeMetaESDT?: boolean;
}

export interface TokenSupplyQuery {
  /** Return results denominated */
  denominated?: boolean;
}

export interface EsdtSupply {
  /**
   * Amount
   * @example ""4360000000000000000""
   */
  totalSupply: string;
  /**
   * Amount
   * @example ""9400000000000000000""
   */
  circulatingSupply: string;
  /**
   * Amount
   * @example ""7730000000000000000""
   */
  minted: string;
  /**
   * Amount
   * @example ""390000000000000000""
   */
  burned: string;
  /**
   * Amount
   * @example ""6190000000000000000""
   */
  initialMinted: string;
  lockedAccounts: object;
}

export interface TokenAccountsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}

export interface TokenAccount {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /**
   * Amount
   * @example ""400000000000000000""
   */
  balance: string;
  identifier: string | null;
  attributes: string | null;
}

export interface TokenTransactionsQuery {
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
  fields?: string | string[];
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
  /** Returns sender / receiver block details */
  withBlockInfo?: boolean;
}

export interface TokenTransactionsCountQuery {
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

export interface TokenTransfersQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Address of the transfer sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transfer hashes */
  hashes?: string | string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
  /** List of fields to filter by */
  fields?: string[];
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
  /** Returns scam information */
  withScamInfo?: boolean;
  /** Integrates username in assets for all addresses present in the transactions */
  withUsername?: boolean;
  /** Returns sender / receiver block details */
  withBlockInfo?: boolean;
}

export interface TokenTransfersCountQuery {
  /** Address of the transfer sender */
  sender?: string;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Id of the shard the sender address belongs to */
  senderShard?: number;
  /** Id of the shard the receiver address belongs to */
  receiverShard?: number;
  /** Filter by miniblock hash */
  miniBlockHash?: string;
  /** Filter by a comma-separated list of transfer hashes */
  hashes?: string | string[];
  /** Status of the transaction (success / pending / invalid / fail) */
  status?: "success" | "pending" | "invalid" | "fail";
  /** Filter transfers by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}
