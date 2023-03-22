export interface MiniblocksQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Filter by a comma-separated list of miniblocks hashes */
  hashes?: string | string[];
}

export interface MiniBlockDetailed {
  /** @example "c956ecbefbba25f0bcb0b182357d41287384fb8707d5860ad5cacc66f3fe0bc8" */
  miniBlockHash: string;
  /** @example "3d008f54446e7f3c636159e0f4934267e154541a95665477676ea7f3abbc0aa7" */
  receiverBlockHash: string;
  /** @example 0 */
  receiverShard: number;
  /** @example "3d008f54446e7f3c636159e0f4934267e154541a95665477676ea7f3abbc0aa7" */
  senderBlockHash: string;
  /** @example 0 */
  senderShard: number;
  /** @example 1646579514 */
  timestamp: number;
  /** @example "TxBlock" */
  type: string;
}
