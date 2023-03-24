import { ApiClient } from "./client";
import { networkConfig } from "./config";
import {
  blockModule,
  delegationModule,
  identityModule,
  keyModule,
  transactionModule,
  miniblockModule,
  networkModule,
  tagModule,
  nodeModule,
  providerModule,
  roundModule,
  shardModule,
  stakeModule,
  usernameModule,
  queryModule,
  waitingListModule,
  infraModule,
  dappConfigModule,
  transferModule,
  batchModule,
  accountModule,
  resultModule,
  tokenModule,
} from "./modules";
import { collectionModule } from "./modules/collection";
import { chainIdType } from "./types";

interface ConfigureProps {
  network?: chainIdType;
}

const mxSDK = () => {
  const client = new ApiClient();

  const block = blockModule(client);
  const delegation = delegationModule(client);
  const identity = identityModule(client);
  const transaction = transactionModule(client);
  const key = keyModule(client);
  const miniblock = miniblockModule(client);
  const network = networkModule(client);
  const tag = tagModule(client);
  const node = nodeModule(client);
  const provider = providerModule(client);
  const round = roundModule(client);
  const shard = shardModule(client);
  const stake = stakeModule(client);
  const username = usernameModule(client);
  const query = queryModule(client);
  const waitingList = waitingListModule(client);
  const infra = infraModule(client);
  const dappConfig = dappConfigModule(client);
  const transfer = transferModule(client);
  const batch = batchModule(client);
  const account = accountModule(client);
  const collection = collectionModule(client);
  const result = resultModule(client);
  const token = tokenModule(client);

  return {
    ...block,
    ...delegation,
    ...identity,
    ...transaction,
    ...key,
    ...miniblock,
    ...network,
    ...tag,
    ...node,
    ...provider,
    ...round,
    ...shard,
    ...stake,
    ...username,
    ...query,
    ...waitingList,
    ...infra,
    ...dappConfig,
    ...transfer,
    ...batch,
    ...account,
    ...collection,
    ...result,
    ...token,

    configure: ({ network }: ConfigureProps = {}) => {
      if (network) {
        client.setBaseURL(networkConfig[network].apiAddress);
      }
    },
  };
};

export default mxSDK();
