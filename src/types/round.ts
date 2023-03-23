export interface RoundsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Filter by validator */
  validator?: string;
  /** Filter by condition */
  condition?: string;
  /** Filter by shard identifier */
  shard?: number;
  /** Filter by epoch number */
  epoch?: number;
}

export interface Round {
  /** @default false */
  blockWasProposed: boolean;
  /** @example 9171722 */
  round: number;
  /** @example 1 */
  shard: number;
  /** @example 636 */
  epoch: number;
  /** @example 1651148112 */
  timestamp: number;
}

export interface RoundsCountQuery {
  /** Filter by validator */
  validator?: string;
  /** Filter by condition */
  condition?: string;
  /** Filter by shard identifier */
  shard?: number;
  /** Filter by epoch number */
  epoch?: number;
}

export interface RoundDetailed {
  /** @default false */
  blockWasProposed: boolean;
  /** @example 9171722 */
  round: number;
  /** @example 1 */
  shard: number;
  /** @example 636 */
  epoch: number;
  /** @example 1651148112 */
  timestamp: number;
  signers: any[][];
}
