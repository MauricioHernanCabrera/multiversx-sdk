import { Amount } from "./";

export interface Delegation {
  /**
   * Amount
   * @example ""6890000000000000000""
   */
  stake: Amount;
  /**
   * Amount
   * @example ""7170000000000000000""
   */
  topUp: Amount;
  /**
   * Amount
   * @example ""3750000000000000000""
   */
  locked: Amount;
  /**
   * Amount
   * @example ""2370000000000000000""
   */
  minDelegation: Amount;
}

export interface DelegationLegacy {
  /**
   * Amount
   * @example ""5480000000000000000""
   */
  totalWithdrawOnlyStake: Amount;
  /**
   * Amount
   * @example ""4000000000000000000""
   */
  totalWaitingStake: Amount;
  /**
   * Amount
   * @example ""4840000000000000000""
   */
  totalActiveStake: Amount;
  /**
   * Amount
   * @example ""8660000000000000000""
   */
  totalUnstakedStake: Amount;
  /**
   * Amount
   * @example ""1490000000000000000""
   */
  totalDeferredPaymentStake: Amount;
  numUsers: number;
}
