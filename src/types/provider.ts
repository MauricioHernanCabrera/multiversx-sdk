export interface Provider {
  numNodes: number;
  stake: string;
  topUp: string;
  locked: string;
  provider: string;
  owner: string | null;
  /** @default false */
  featured: boolean;
  /**
   * Amount
   * @example ""3010000000000000000""
   */
  serviceFee: string;
  /**
   * Amount
   * @example ""8410000000000000000""
   */
  delegationCap: string;
  /**
   * Amount
   * @example ""3110000000000000000""
   */
  apr: string;
  /**
   * Amount
   * @example ""6580000000000000000""
   */
  numUsers: string;
  cumulatedRewards: string | null;
  identity: string | null;
  initialOwnerFunds: string;
  /** @default false */
  automaticActivation: boolean;
  /** @default false */
  checkCapOnRedelegate: boolean;
  totalUnStaked: string;
  createdNonce: number;
}

export interface ProvidersQuery {
  /** Search by identity */
  identity?: string;
  /** Search by multiple providers address */
  providers?: string[];
}
