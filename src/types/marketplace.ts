export interface Bids {
  amount: string;
  token: string;
}

export interface AuctionsQuery {
  /** Number of items to retrieve */
  size?: number;
}

export interface Auctions {
  owner: string;
  auctionId: number;
  identifier: string;
  collection: string;
  status: "running" | "claimable" | "ended" | "closed" | "unknown";
  auctionType: string;
  createdAt: number;
  endsAt: number;
  marketplaceAuctionId: number;
  marketplace: string;
  minBid: Bids;
  maxBid: Bids;
}

export interface AuctionsCountQuery {
  /** Returns auctions count with specified status */
  status?: string;
}

export interface AuctionDetailsQuery {
  /** Auction identifier */
  auctionId?: string;
}

export interface AccountAuctionStats {
  auctions: number;
  claimable: number;
  collected: number;
  collections: number;
  creations: number;
  likes: number;
  orders: number;
}

export interface AccountAuctionsQuery {
  /** Number of items to skip for the result set */
  from?: number;
  /** Number of items to retrieve */
  size?: number;
  /** Returns auctions with specified status */
  status?: string;
}

export interface Auction {
  owner: string;
  auctionId: number;
  identifier: string;
  collection: string;
  status: "running" | "claimable" | "ended" | "closed" | "unknown";
  auctionType: string;
  createdAt: number;
  endsAt: number;
  marketplaceAuctionId: string;
  marketplace: string;
  minBid: Bids;
  maxBid: Bids;
}

export interface CollectionAuctionsQuery {
  /** Number of items to retrieve */
  size?: number;
}
