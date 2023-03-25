export interface NftTagsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by tag name */
  search?: any;
}

export interface Tag {
  /** @example "sunny" */
  tag: string | null;
  /** @example 46135 */
  count: number | null;
}

export interface NftTagsCountQuery {
  /** Search by tag name */
  search?: string;
}
