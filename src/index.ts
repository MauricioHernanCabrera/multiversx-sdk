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
} from "./modules";
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

    configure: ({ network }: ConfigureProps = {}) => {
      if (network) {
        client.setBaseURL(networkConfig[network].apiAddress);
      }
    },
  };
};

export default mxSDK();
