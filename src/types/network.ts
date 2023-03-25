export interface NetworkConstants {
  /** The chain identifier */
  chainId: string;
  /** Gas per data byte */
  gasPerDataByte: number;
  /** Minimum gas limit */
  minGasLimit: number;
  /** Minimum gas price */
  minGasPrice: number;
  /** Minimum transaction version */
  minTransactionVersion: number;
}

export interface Economics {
  totalSupply: number;
  circulatingSupply: number;
  staked: number;
  price: number;
  marketCap: number;
  apr: number;
  topUpApr: number;
  baseApr: number;
  minimumAuctionTopUp: string | null;
  tokenMarketCap: number | null;
}

export interface Stats {
  accounts: number;
  blocks: number;
  epoch: number;
  refreshRate: number;
  roundsPassed: number;
  roundsPerEpoch: number;
  shards: number;
  transactions: number;
  scResults: number;
}

export interface About {
  appVersion: string;
  pluginsVersion: string | null;
  network: string;
  cluster: string;
  version: string;
  scamEngineVersion: string | null;
}
