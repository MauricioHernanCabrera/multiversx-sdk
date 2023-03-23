import { Amount } from "./common";

export interface GlobalStake {
  /** @default 3200 */
  totalValidators: number;
  /** @default 3199 */
  activeValidators: number;
  /** @default 2 */
  queueSize: number;
  /**
   * Amount
   * @example ""7890000000000000000""
   */
  totalStaked: Amount;
}
