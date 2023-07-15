import { ClientRetryOptions } from "../helpers/client-retry";

export interface ConfigureProps {
  chainId?: chainIdType;
  retry?: ClientRetryOptions;
  customBaseURL?: string;
}

export type chainIdType = "mainnet" | "testnet" | "devnet";

export interface NetworkType {
  apiAddress: string;
}
