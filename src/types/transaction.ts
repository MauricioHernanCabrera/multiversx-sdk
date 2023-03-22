import { Amount, AccountAssets, ScamInfo, SmartContractResult } from "./";

export interface TransactionAction {
  category: string;
  name: string;
  description: string;
  arguments: object;
}

export interface TransactionReceipt {
  value: string;
  sender: string;
  data: string;
}

export interface TransactionLog {
  address: string;
  addressAssets: AccountAssets | null;
  events: string[];
}

export interface Transaction {
  txHash: string;
  gasLimit: number | null;
  gasPrice: number | null;
  gasUsed: number | null;
  miniBlockHash: string | null;
  nonce: number | null;
  receiver: string;
  receiverAssets: AccountAssets | null;
  receiverShard: number;
  round: number | null;
  sender: string;
  senderAssets: AccountAssets | null;
  senderShard: number;
  signature: string | null;
  status: string;
  value: string;
  fee: string | null;
  timestamp: number;
  data: string | null;
  function: string | null;
  action: TransactionAction | null;
  scamInfo: ScamInfo | null;
  type: "Transaction" | "SmartContractResult" | null;
  originalTxHash: string | null;
  pendingResults: boolean | null;
}

export interface TransactionListQuery {
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
  /**
   * Condition for elastic search queries
   * @deprecated
   */
  condition?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
  /** Sort order (asc/desc) */
  order?: "asc" | "desc";
  fields?: string | string[];
  /** Return results for transactions. When "withScResults" parameter is applied, complexity estimation is 200 */
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
}

export interface TransactionCreate {
  chainId: string;
  data: string;
  gasLimit: number;
  gasPrice: number;
  nonce: number;
  receiver: string;
  sender: string;
  signature: string;
  value: string;
  version: number;
  options: number;
  guardian: string;
  guardianSignature: string;
}

export interface TransactionSendResult {
  receiver: string;
  receiverShard: number;
  sender: string;
  senderShard: number;
  status: string;
  txHash: string;
}

export interface TransactionsCountQuery {
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
  /**
   * Condition for elastic search queries
   * @deprecated
   */
  condition?: string;
  /** Before timestamp */
  before?: number;
  /** After timestamp */
  after?: number;
}

export interface TransactionDetailsQuery {
  /**
   * List of fields to filter by
   */
  fields?: string | string[];
}

export interface TransactionDetailed {
  txHash: string;
  gasLimit: number | null;
  gasPrice: number | null;
  gasUsed: number | null;
  miniBlockHash: string | null;
  nonce: number | null;
  receiver: string;
  receiverAssets: AccountAssets | null;
  receiverShard: number;
  round: number | null;
  sender: string;
  senderAssets: AccountAssets | null;
  senderShard: number;
  signature: string | null;
  status: string;
  value: string;
  fee: string | null;
  timestamp: number;
  data: string | null;
  function: string | null;
  action: TransactionAction | null;
  scamInfo: ScamInfo | null;
  type: "Transaction" | "SmartContractResult" | null;
  originalTxHash: string | null;
  pendingResults: boolean | null;
  results: SmartContractResult[];
  receipt: TransactionReceipt | null;
  price: number | null;
  logs: TransactionLog | null;
  operations: TransactionOperation[];
  senderBlockHash: string | null;
  senderBlockNonce: number | null;
  receiverBlockHash: string | null;
  receiverBlockNonce: number | null;
}

export interface TransactionOperation {
  id: string;
  /** @default "none" */
  action:
    | "none"
    | "transfer"
    | "transferValueOnly"
    | "burn"
    | "addQuantity"
    | "create"
    | "localMint"
    | "localBurn"
    | "wipe"
    | "freeze"
    | "writeLog"
    | "signalError";
  /** @default "none" */
  type: "none" | "nft" | "esdt" | "log" | "error" | "egld";
  esdtType:
    | "FungibleESDT"
    | "NonFungibleESDT"
    | "SemiFungibleESDT"
    | "MetaESDT";
  identifier: string;
  ticker: string;
  collection: string;
  name: string;
  value: string;
  valueUSD: number;
  sender: string;
  receiver: string;
  senderAssets: AccountAssets | null;
  receiverAssets: AccountAssets | null;
  decimals: number | null;
  data: string | null;
  message: string | null;
  svgUrl: string | null;
}

export interface TransactionDecodeDto {
  action: TransactionAction | null;
  data: string;
  receiver: string;
  sender: string;
  value: string;
}
