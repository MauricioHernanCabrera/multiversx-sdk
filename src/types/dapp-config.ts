export interface DappConfig {
  /** @example "mainnet" */
  id: string;
  /** @example "Mainnet" */
  name: string;
  /** @example "eGLD" */
  egldLabel: string;
  /** @example "4" */
  decimals: string;
  /** @example "18" */
  egldDenomination: string;
  /** @example "1500" */
  gasPerDataByte: string;
  /** @example "4000" */
  apiTimeout: string;
  /** @example "https://maiar.page.link/?apn=com.multiversx.maiar.wallet&isi=1519405832&ibi=com.multiversx.maiar.wallet&link=https://maiar.com/" */
  walletConnectDeepLink: string;
  /** @example "https://bridge.walletconnect.org" */
  walletConnectBridgeAddresses: string[];
  /** @example "https://wallet.multiversx.com" */
  walletAddress: string;
  /** @example "https://api.multiversx.com" */
  apiAddress: string;
  /** @example "https://explorer.multiversx.com" */
  explorerAddress: string;
  /** @example "1" */
  chainId: string;
}
