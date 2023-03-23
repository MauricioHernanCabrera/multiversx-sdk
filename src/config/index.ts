import { chainIdType, NetworkType } from "./../types";

export const networkConfig: Record<chainIdType, NetworkType> = {
  devnet: {
    apiAddress: "https://devnet-api.multiversx.com",
  },

  testnet: {
    apiAddress: "https://testnet-api.multiversx.com",
  },

  mainnet: {
    apiAddress: "https://api.multiversx.com",
  },
};
