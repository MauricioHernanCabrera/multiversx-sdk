export interface TransfersQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by multiple receiver addresses, comma-separated */
  receiver?: string[];
  /** Search by multiple sender addresses, comma-separated */
  sender?: string[];
  /** Identifier of the token */
  token?: string;
  /** Filter transfers by function name */
  function?: string;
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
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
  fields?: string | string[];
  /** Returns scam information */
  withScamInfo?: boolean;
  /** Integrates username in assets for all addresses present in the transactions */
  withUsername?: boolean;
  /** Returns sender / receiver block details */
  withBlockInfo?: boolean;
}

export interface TransfersCountQuery {
  /** Search by multiple sender addresses, comma-separated */
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
  /** Filter transfers by function name */
  function?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}
