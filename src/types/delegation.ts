export interface Delegation {
  /**
   * Amount
   * @example ""6890000000000000000""
   */
  stake: string;
  /**
   * Amount
   * @example ""7170000000000000000""
   */
  topUp: string;
  /**
   * Amount
   * @example ""3750000000000000000""
   */
  locked: string;
  /**
   * Amount
   * @example ""2370000000000000000""
   */
  minDelegation: string;
}

export interface DelegationLegacy {
  /**
   * Amount
   * @example ""5480000000000000000""
   */
  totalWithdrawOnlyStake: string;
  /**
   * Amount
   * @example ""4000000000000000000""
   */
  totalWaitingStake: string;
  /**
   * Amount
   * @example ""4840000000000000000""
   */
  totalActiveStake: string;
  /**
   * Amount
   * @example ""8660000000000000000""
   */
  totalUnstakedStake: string;
  /**
   * Amount
   * @example ""1490000000000000000""
   */
  totalDeferredPaymentStake: string;
  numUsers: number;
}
