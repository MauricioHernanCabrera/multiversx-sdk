import { AccountAssets, Amount, TransactionAction, TransactionLog } from "./";

export interface SmartContractResult {
  hash: string;
  timestamp: number;
  nonce: number;
  gasLimit: number;
  gasPrice: number;
  /**
   * Amount
   * @example ""9710000000000000000""
   */
  value: Amount;
  sender: string;
  receiver: string;
  senderAssets: AccountAssets | null;
  receiverAssets: AccountAssets | null;
  relayedValue: string;
  data: string;
  prevTxHash: string;
  originalTxHash: string;
  callType: string;
  miniBlockHash: string | null;
  logs: TransactionLog | null;
  returnMessage: string | null;
  action: TransactionAction | null;
}

export interface SmartContractResultsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** The hash of the parent miniBlock */
  miniBlockHash?: string;
  /** Original transaction hashes */
  originalTxHashes?: string[];
}
