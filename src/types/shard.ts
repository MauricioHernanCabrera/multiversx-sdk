export interface Shard {
  /** @example 1 */
  shard: number;
  /** @example 800 */
  validators: number;
  /** @example 800 */
  activeValidators: number;
}

export interface ShardsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}
