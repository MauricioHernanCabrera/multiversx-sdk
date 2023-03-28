# Multiversx SDK for Javascript/Typescript

[![NPM Version](https://img.shields.io/npm/v/multiversx-sdk.svg)](http://npmjs.com/package/multiversx-sdk)
[![Downloads](https://img.shields.io/npm/dt/multiversx-sdk.svg)](http://npmjs.com/package/multiversx-sdk)

This library provides developers with a simple set of bindings to help you integrate Multiversx API to a website.

## 📲 Installation
```sh
$ npm i multiversx-sdk or yarn add multiversx-sdk
```

That's it! Multiversx SDK has been successfully installed.

## 🌟 Getting Started

Simple usage looks like:

```typescript
import mxSDK from "multiversx-sdk";

mxSDK.configure({ chainId: "devnet" });

mxSDK.transactionList();
```

## 📚 Documentation

| Function                       | Endpoint                                                | Module       |
| ------------------------------ | ------------------------------------------------------- | ------------ |
| accounts                       | GET:/accounts                                           | account      |
| accountsCount                  | GET:/accounts/count                                     | account      |
| accountDetails                 | GET:/accounts/{address}                                 | account      |
| accountDeferredPaymentDetails  | GET:/accounts/{address}/deferred                        | account      |
| accountVerificationDetails     | GET:/accounts/{address}/verification                    | account      |
| accountTokens                  | GET:/accounts/{address}/tokens                          | account      |
| accountTokensCount             | GET:/accounts/{address}/tokens/count                    | account      |
| accountTokenDetails            | GET:/accounts/{address}/tokens/{token}                  | account      |
| accountRoleCollections         | GET:/accounts/{address}/roles/collections               | account      |
| accountRoleCollectionsCount    | GET:/accounts/{address}/roles/collections/count         | account      |
| accountRoleCollectionDetails   | GET:/accounts/{address}/roles/collections/{collection}  | account      |
| accountTokenRoles              | GET:/accounts/{address}/roles/tokens                    | account      |
| accountTokenRolesCount         | GET:/accounts/{address}/roles/tokens/count              | account      |
| accountTokenRoleDetails        | GET:/accounts/{address}/roles/tokens/{identifier}       | account      |
| accountCollections             | GET:/accounts/{address}/collections                     | account      |
| accountCollectionsCount        | GET:/accounts/{address}/collections/count               | account      |
| accountCollectionDetails       | GET:/accounts/{address}/collections/{collection}        | account      |
| accountNfts                    | GET:/accounts/{address}/nfts                            | account      |
| accountNftsCount               | GET:/accounts/{address}/nfts/count                      | account      |
| accountNftDetails              | GET:/accounts/{address}/nfts/{nft}                      | account      |
| accountStakeDetails            | GET:/accounts/{address}/stake                           | account      |
| accountDelegations             | GET:/accounts/{address}/delegation                      | account      |
| accountLegacyDelegationDetails | GET:/accounts/{address}/delegation-legacy               | account      |
| accountKeys                    | GET:/accounts/{address}/keys                            | account      |
| accountWaitingList             | GET:/accounts/{address}/waiting-list                    | account      |
| accountTransactionList         | GET:/accounts/{address}/transactions                    | account      |
| accountTransactionsCount       | GET:/accounts/{address}/transactions/count              | account      |
| accountTransfers               | GET:/accounts/{address}/transfers                       | account      |
| accountTransfersCount          | GET:/accounts/{address}/transfers/count                 | account      |
| accountContracts               | GET:/accounts/{address}/contracts                       | account      |
| accountContractsCount          | GET:/accounts/{address}/contracts/count                 | account      |
| accountUpgradeDetails          | GET:/accounts/{address}/upgrades                        | account      |
| accountContractResults         | GET:/accounts/{address}/results                         | account      |
| accountContractResultsCount    | GET:/accounts/{address}/results/count                   | account      |
| accountContractResultDetails   | GET:/accounts/{address}/results/{scHash}                | account      |
| accountHistory                 | GET:/accounts/{address}/history                         | account      |
| accountHistoryCount            | GET:/accounts/{address}/history/count                   | account      |
| accountTokenHistoryCount       | GET:/accounts/{address}/history/{tokenIdentifier}/count | account      |
| accountTokenHistory            | GET:/accounts/{address}/history/{tokenIdentifier}       | account      |
| createBatch                    | POST:/batch                                             | batch        |
| batchList                      | GET:/batch                                              | batch        |
| batchDetails                   | GET:/batch/{id}                                         | batch        |
| blocks                         | GET:/blocks                                             | block        |
| blockDetails                   | GET:/blocks/{hash}                                      | block        |
| blocksCount                    | GET:/blocks/count                                       | block        |
| collections                    | GET:/collections                                        | collection   |
| collectionsCount               | GET:/collections/count                                  | collection   |
| collectionDetails              | GET:/collections/{collection}                           | collection   |
| collectionRanks                | GET:/collections/{collection}/ranks                     | collection   |
| collectionNfts                 | GET:/collections/{collection}/nfts                      | collection   |
| collectionNftsCount            | GET:/collections/{collection}/nfts/count                | collection   |
| collectionAccounts             | GET:/collections/{collection}/accounts                  | collection   |
| collectionTransactions         | GET:/collections/{collection}/transactions              | collection   |
| collectionTransactionsCount    | GET:/collections/{collection}/transactions/count        | collection   |
| dappConfiguration              | GET:/dapp/config                                        | dapp-config  |
| delegationStatistics           | GET:/delegation                                         | delegation   |
| legacyDelegationStatistics     | GET:/delegation-legacy                                  | delegation   |
| identities                     | GET:/identities                                         | identity     |
| identityDetails                | GET:/identities/{identifier}                            | identity     |
| healthCheck                    | GET:/hello                                              | infra        |
| unbondingPeriod                | GET:/keys/{key}/unbond-period                           | key          |
| auctions                       | GET:/auctions                                           | marketplace  |
| auctionsCount                  | GET:/auctions/count                                     | marketplace  |
| auctionDetails                 | GET:/auctions/{id}                                      | marketplace  |
| accountStats                   | GET:/accounts/{address}/auction/stats                   | marketplace  |
| accountAuctions                | GET:/accounts/{address}/auctions                        | marketplace  |
| accountAuctionsCount           | GET:/accounts/{address}/auctions/count                  | marketplace  |
| collectionStats                | GET:/collections/{collection}/auction/stats             | marketplace  |
| collectionAuctions             | GET:/collections/{collection}/auctions                  | marketplace  |
| collectionAuctionsCount        | GET:/collections/{collection}/auctions/count            | marketplace  |
| miniblocks                     | GET:/miniblocks                                         | miniblock    |
| miniblockDetails               | GET:/miniblocks/{miniBlockHash}                         | miniblock    |
| networkConstants               | GET:/constants                                          | network      |
| networkEconomics               | GET:/economics                                          | network      |
| networkStatistics              | GET:/stats                                              | network      |
| about                          | GET:/about                                              | network      |
| nodes                          | GET:/nodes                                              | node         |
| nodeVersions                   | GET:/nodes/versions                                     | node         |
| nodesCount                     | GET:/nodes/count                                        | node         |
| nodeDetails                    | GET:/nodes/{bls}                                        | node         |
| providers                      | GET:/providers                                          | provider     |
| providerDetails                | GET:/providers/{address}                                | provider     |
| vmQuery                        | POST:/query                                             | query        |
| smartContractResults           | GET:/results                                            | result       |
| smartContractResultsCount      | GET:/results/count                                      | result       |
| smartContractResultDetails     | GET:/results/{scHash}                                   | result       |
| rounds                         | GET:/rounds                                             | round        |
| roundsCount                    | GET:/rounds/count                                       | round        |
| roundDetails                   | GET:/rounds/{shard}/{round}                             | round        |
| shards                         | GET:/shards                                             | shard        |
| stake                          | GET:/stake                                              | stake        |
| nftTags                        | GET:/tags                                               | tag          |
| nftTagsCount                   | GET:/tags/count                                         | tag          |
| nftTagDetails                  | GET:/tags/{tag}                                         | tag          |
| tokens                         | GET:/tokens                                             | token        |
| tokensCount                    | GET:/tokens/count                                       | token        |
| tokenDetails                   | GET:/tokens/{identifier}                                | token        |
| tokenSupply                    | GET:/tokens/{identifier}/supply                         | token        |
| tokenAccounts                  | GET:/tokens/{identifier}/accounts                       | token        |
| tokenAccountsCount             | GET:/tokens/{identifier}/accounts/count                 | token        |
| tokenTransactions              | GET:/tokens/{identifier}/transactions                   | token        |
| tokenTransactionsCount         | GET:/tokens/{identifier}/transactions/count             | token        |
| tokenTransfers                 | GET:/tokens/{identifier}/transfers                      | token        |
| tokenTransfersCount            | GET:/tokens/{identifier}/transfers/count                | token        |
| tokenLogoPNG                   | GET:/tokens/{identifier}/logo/png                       | token        |
| tokenLogoSVG                   | GET:/tokens/{identifier}/logo/svg                       | token        |
| transactionList                | GET:/transactions                                       | transaction  |
| sendTransaction                | POST:/transactions                                      | transaction  |
| transactionsCount              | GET:/transactions/count                                 | transaction  |
| transactionDetails             | GET:/transactions/{txHash}                              | transaction  |
| decodeTransaction              | POST:/transactions/decode                               | transaction  |
| transfers                      | GET:/transfers                                          | transfer     |
| transfersCount                 | GET:/transfers/count                                    | transfer     |
| accountDetails                 | GET:/usernames/{username}                               | username     |
| waitingList                    | GET:/waiting-list                                       | waiting-list |
| waitingListCount               | GET:/waiting-list/count                                 | waiting-list |
| xExchangeEconomics             | GET:/mex/economics                                      | xexchange    |
| xExchangePairs                 | GET:/mex/pairs                                          | xexchange    |
| xExchangePairsCount            | GET:/mex/pairs/count                                    | xexchange    |
| xExchangeTokens                | GET:/mex/tokens                                         | xexchange    |
| xExchangeTokensCount           | GET:/mex/tokens/count                                   | xexchange    |
| xExchangeTokenDetails          | GET:/mex/tokens/{identifier}                            | xexchange    |
| xExchangeFarms                 | GET:/mex/farms                                          | xexchange    |
| xExchangeFarmsCount            | GET:/mex/farms/count                                    | xexchange    |
| xExchangePairDetails           | GET:/mex/pairs/{baseId}/{quoteId}                       | xexchange    |

## 🏻 License

```
MIT license
```
