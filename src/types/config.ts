export interface ConfigureProps {
  chainId?: chainIdType;
}

export type chainIdType = "mainnet" | "testnet" | "devnet";

export interface NetworkType {
  apiAddress: string;
}
