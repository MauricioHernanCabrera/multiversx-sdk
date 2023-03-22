import { Identity } from "./";

export interface BlocksQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Id of the shard the block belongs to */
  shard?: number;
  /** Filter by proposer */
  proposer?: string;
  /** Filter by validator */
  validator?: string;
  /** Filter by epoch */
  epoch?: number;
  /** Filter by nonce */
  nonce?: number;
  hashes?: string | string[];
  /** Provide identity information for proposer node */
  withProposerIdentity?: boolean;
}

export interface Block {
  hash: string;
  epoch: number;
  nonce: number;
  prevHash: string;
  proposer: string;
  proposerIdentity: Identity | null;
  pubKeyBitmap: string;
  round: number;
  shard: number;
  size: number;
  sizeTxs: number;
  stateRootHash: string;
  timestamp: number;
  txCount: number;
  gasConsumed: number;
  gasRefunded: number;
  gasPenalized: number;
  maxGasLimit: number;
  scheduledRootHash: string | null;
}

export interface BlocksCountQuery {
  /** Id of the shard the block belongs to */
  shard?: number;
  /** Filter by proposer */
  proposer?: string;
  /** Filter by validator */
  validator?: string;
  /** Filter by epoch */
  epoch?: number;
  /** Filter by nonce */
  nonce?: number;
}

export interface BlockDetailed {
  hash: string;
  epoch: number;
  nonce: number;
  prevHash: string;
  proposer: string;
  proposerIdentity: Identity | null;
  pubKeyBitmap: string;
  round: number;
  shard: number;
  size: number;
  sizeTxs: number;
  stateRootHash: string;
  timestamp: number;
  txCount: number;
  gasConsumed: number;
  gasRefunded: number;
  gasPenalized: number;
  maxGasLimit: number;
  scheduledRootHash: string | null;
  miniBlocksHashes: string[];
  notarizedBlocksHashes: string[];
  validators: string[];
}
