import { Amount } from "./";

export interface IdentitiesQuery {
  /** Filter by comma-separated list of identities */
  identities?: string | string[];
}

export interface Identity {
  identity: string;
  name: string;
  description: string;
  avatar: string;
  website: string;
  twitter: string;
  location: string;
  score: number;
  validators: number;
  /**
   * Amount
   * @example ""1300000000000000000""
   */
  stake: Amount;
  /**
   * Amount
   * @example ""7070000000000000000""
   */
  topUp: Amount;
  /**
   * Amount
   * @example ""380000000000000000""
   */
  locked: Amount;
  distribution: object;
  providers: string[];
  stakePercent: number;
  rank: number;
  apr: number;
}
