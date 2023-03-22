import { ApiClient } from "./client";
import { networkConfig } from "./config";
import {
  blockModule,
  delegationModule,
  identityModule,
  keyModule,
  transactionModule,
  miniblockModule,
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

  return {
    ...block,
    ...delegation,
    ...identity,
    ...transaction,
    ...key,
    ...miniblock,

    configure: ({ network }: ConfigureProps = {}) => {
      if (network) {
        client.setBaseURL(networkConfig[network].apiAddress);
      }
    },
  };
};

export default mxSDK();
