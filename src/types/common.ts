export type AccountAssets = object;

export type Amount = object;

export interface ScamInfo {
  type: "none" | "potentialScam" | "scam";
  info: string | null;
}

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
