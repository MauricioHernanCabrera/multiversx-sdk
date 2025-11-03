import { networkConfig } from "./config";
import { ApiClient } from "./helpers/client";

import {
  accountModule,
  batchModule,
  blockModule,
  collectionModule,
  dappConfigModule,
  delegationModule,
  identityModule,
  infraModule,
  keyModule,
  marketplaceModule,
  miniblockModule,
  networkModule,
  nodeModule,
  providerModule,
  queryModule,
  resultModule,
  roundModule,
  shardModule,
  stakeModule,
  tagModule,
  tokenModule,
  transactionModule,
  transferModule,
  usernameModule,
  waitingListModule,
  xexchangeModule,
} from "./modules";
import { nftModule } from "./modules/nft";
import { ConfigureProps } from "./types";

const mxSDK = () => {
  const client = new ApiClient();

  const account = accountModule(client);
  const batch = batchModule(client);
  const block = blockModule(client);
  const collection = collectionModule(client);
  const dappConfig = dappConfigModule(client);
  const delegation = delegationModule(client);
  const identity = identityModule(client);
  const infra = infraModule(client);
  const key = keyModule(client);
  const marketplace = marketplaceModule(client);
  const miniblock = miniblockModule(client);
  const network = networkModule(client);
  const node = nodeModule(client);
  const provider = providerModule(client);
  const query = queryModule(client);
  const result = resultModule(client);
  const round = roundModule(client);
  const shard = shardModule(client);
  const stake = stakeModule(client);
  const tag = tagModule(client);
  const token = tokenModule(client);
  const transaction = transactionModule(client);
  const transfer = transferModule(client);
  const username = usernameModule(client);
  const waitingList = waitingListModule(client);
  const xexchange = xexchangeModule(client);
  const nft = nftModule(client);

  return {
    ...account,
    ...batch,
    ...block,
    ...collection,
    ...dappConfig,
    ...delegation,
    ...identity,
    ...infra,
    ...key,
    ...marketplace,
    ...miniblock,
    ...network,
    ...node,
    ...provider,
    ...query,
    ...result,
    ...round,
    ...shard,
    ...stake,
    ...tag,
    ...token,
    ...transaction,
    ...transfer,
    ...username,
    ...waitingList,
    ...xexchange,
    ...nft,

    configure: ({
      chainId,
      retry,
      customBaseURL,
      headers,
    }: ConfigureProps = {}) => {
      if (chainId) {
        client.setBaseURL(networkConfig[chainId].apiAddress);
      }

      if (customBaseURL) {
        client.setBaseURL(customBaseURL);
      }

      if (retry) {
        client.setOptions(retry);
      }

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          client.setHeader(key, value);
        });
      }
    },
  };
};

export default mxSDK();

export { mxSDK };
