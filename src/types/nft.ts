export interface NftQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Search by collection identifier */
  search?: string;
  /** Search by collection identifiers, comma-separated */
  identifiers?: string | string[];
  /** Filter by type (NonFungibleESDT/SemiFungibleESDT/MetaESDT) */
  type?: string[];
  /**
   * Filter collections where the given address has a creator role
   * @deprecated
   */
  subType?: string[];
  collection?: string;
  collections?: string[];
  name?: string;
  tags?: string[];
  creator?: string;
  isWhitelistedStorage?: 'true' | 'false';
  hasUris?: 'true' | 'false';
  isNsfw?: 'true' | 'false';
  isScam?: 'true' | 'false';
  scamType?: string;
  before?: number;
  after?: number;
  withOwner?: 'true' | 'false';
  withSupply?: 'true' | 'false';
  traits?: 'true' | 'false';
}

export interface NftDetails {
  identifier: string;
  collection: string;
  hash: string;
  timestamp: number;
  attributes: string;
  nonce: number;
  type: "NonFungibleESDT" | "SemiFungibleESDT" | "MetaESDT";
  subType: string;
  name: string;
  creator: string;
  royalties: number;
  uris: string[];
  url: string;
  media: {
    url: string;
    originalUrl: string;
    thumbnailUrl: string;
    fileType: string;
    fileSize: number;
  };
  isWhitelistedStorage: boolean;
  thumbnailUrl: string;
  tags: string[];
  metadata: {
    description: string;
    fileType: string;
    fileUri: string;
    fileName: string;
    error: {
      code: string;
      message: string;
      timestamp: number;
    };
  };
  owner: string;
  balance: string;
  supply: string;
  decimals: number;
  assets: {
    website: string;
    description: string;
    status: string;
    pngUrl: string;
    name: string;
    svgUrl: string;
    ledgerSignature: string;
    lockedAccounts: string;
    extraTokens: string[];
    preferredRankAlgorithm: string;
  };
  ticker: string;
  scamInfo: {
    type: string;
    info: string;
  };
  score: number;
  rank: number;
  rarities: {
    statistical: {
      rank: number;
      score: number;
    };
    trait: {
      rank: number;
      score: number;
    };
    jaccardDistances: {
      rank: number;
      score: number;
    };
    openRarity: {
      rank: number;
      score: number;
    };
    custom: {
      rank: number;
      score: number;
    };
  };
  isNsfw: boolean;
  unlockSchedule: {
    remainingEpochs: number;
    percent: number;
  }[];
  unlockEpoch: number;
}
