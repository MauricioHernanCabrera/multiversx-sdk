export interface AccountUsername {
  /** @example "erd1qga7ze0l03chfgru0a32wxqf2226nzrxnyhzer9lmudqhjgy7ycqjjyknz" */
  address: string;
  /** @example 12 */
  nonce: number | null;
  /**
   * Amount
   * @example ""4780000000000000000""
   */
  balance: string;
  /** @example "829LsRk/pB5HCJZTvZzkBJ8g4ca1RiBpYjLzzK61pwM=" */
  rootHash: string;
  /** @example 47 */
  txCount: number | null;
  /** @example 49 */
  scrCount: number | null;
  /** @example "alice.elrond" */
  username: string;
  /** @example 0 */
  shard: number | null;
  /** @default 0 */
  developerReward: string;
}
