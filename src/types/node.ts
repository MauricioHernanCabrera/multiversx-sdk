import { Amount } from "./common";

export interface Node {
  bls: string;
  name: string;
  /** @default 0 */
  version: string;
  rating: number;
  tempRating: number;
  ratingModifier: number;
  shard: number | null;
  type: "observer" | "validator" | null;
  status:
    | "new"
    | "unknown"
    | "waiting"
    | "eligible"
    | "jailed"
    | "queued"
    | "leaving"
    | "inactive"
    | null;
  /** @default false */
  online: boolean;
  nonce: number;
  instances: number;
  owner: string;
  identity: string | null;
  provider: string;
  issues: string[];
  /**
   * Amount
   * @example ""9510000000000000000""
   */
  stake: Amount;
  /**
   * Amount
   * @example ""7400000000000000000""
   */
  topUp: Amount;
  /**
   * Amount
   * @example ""7470000000000000000""
   */
  locked: Amount;
  /** @default 0 */
  leaderFailure: number;
  /** @default 15 */
  leaderSuccess: number;
  /** @default 0 */
  validatorFailure: number;
  /** @default 0 */
  validatorIgnoredSignatures: number;
  /** @default 10000 */
  validatorSuccess: number;
  /** @default 0 */
  position: number;
  auctioned: boolean | null;
  auctionPosition: number | null;
  auctionTopUp: string | null;
  auctionSelected: boolean | null;
  fullHistory: boolean | null;
  syncProgress: number | null;
}

export interface NodesQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by name, bls or version */
  search?: string;
  /** Whether node is online or not */
  online?: boolean;
  /** Type of node */
  type?: "observer" | "validator";
  /** Node status */
  status?:
    | "new"
    | "unknown"
    | "waiting"
    | "eligible"
    | "jailed"
    | "queued"
    | "leaving"
    | "inactive";
  /** Node shard */
  shard?: number;
  /** Whether node has issues or not */
  issues?: boolean;
  /** Node identity */
  identity?: string;
  /** Node provider */
  provider?: string;
  /** Node owner */
  owner?: string;
  /** Whether node is auctioned or not */
  auctioned?: boolean;
  /** Whether node is of type 'Full History' or not */
  fullHistory?: boolean;
  /** Sorting criteria */
  sort?:
    | "name"
    | "version"
    | "tempRating"
    | "leaderSuccess"
    | "leaderFailure"
    | "validatorSuccess"
    | "validatorFailure"
    | "validatorIgnoredSignatures"
    | "position";
  /** Sorting order (asc / desc) */
  order?: "asc" | "desc";
}

export interface NodeVersion {
  [key: string]: number;
}

export interface NodesCountQuery {
  /** Search by name, bls or version */
  search?: string;
  /** Whether node is online or not */
  online?: boolean;
  /** Type of node */
  type?: "observer" | "validator";
  /** Node status */
  status?:
    | "new"
    | "unknown"
    | "waiting"
    | "eligible"
    | "jailed"
    | "queued"
    | "leaving"
    | "inactive";
  /** Node shard */
  shard?: number;
  /** Whether node has issues or not */
  issues?: boolean;
  /** Node identity */
  identity?: string;
  /** Node provider */
  provider?: string;
  /** Node owner */
  owner?: string;
  /** Whether node is auctioned or not */
  auctioned?: boolean;
  /** Whether node is of type 'Full History' or not */
  fullHistory?: boolean;
  /** Sorting criteria */
  sort?:
    | "name"
    | "version"
    | "tempRating"
    | "leaderSuccess"
    | "leaderFailure"
    | "validatorSuccess"
    | "validatorFailure"
    | "validatorIgnoredSignatures"
    | "position";
  /** Sorting order (asc / desc) */
  order?: "asc" | "desc";
}
