import { ApiClient } from "./client";
import { networkConfig } from "./config";

import { BlockAPI, TransactionAPI } from "./modules";
import { chainIdType } from "./types";

interface ConfigureProps {
  network?: chainIdType;
}

class MultiversxSDK {
  private client: ApiClient;
  public transaction: TransactionAPI;
  public block: BlockAPI;

  constructor() {
    this.client = new ApiClient();
    this.transaction = new TransactionAPI(this.client);
    this.block = new BlockAPI(this.client);
  }

  configure = ({ network }: ConfigureProps = {}) => {
    if (network) {
      this.client.setBaseURL(networkConfig[network].apiAddress);
    }
  };
}

const multiversxSDK = new MultiversxSDK();

export default multiversxSDK;
