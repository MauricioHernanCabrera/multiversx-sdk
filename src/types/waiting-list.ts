export interface WaitingList {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /** @example 46 */
  nonce: number;
  /** @example 2 */
  rank: number;
  /**
   * Amount
   * @example ""2780000000000000000""
   */
  value: string;
}

export interface WaitingListQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
}
