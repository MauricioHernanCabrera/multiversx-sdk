import { ApiClient } from "./client";
import { networkConfig } from "./config";
import { TransactionAPI } from "./modules/transaction";
import { chainIdType } from "./types/network";

interface ConfigureProps {
  network?: chainIdType;
}

class MultiversxSDK {
  private client: ApiClient;
  public transaction: TransactionAPI;

  constructor() {
    this.client = new ApiClient();
    this.transaction = new TransactionAPI(this.client);
  }

  configure = ({ network }: ConfigureProps = {}) => {
    if (network) {
      this.client.setBaseURL(networkConfig[network].apiAddress);
    }
  };
}

const multiversxSDK = new MultiversxSDK();

export default multiversxSDK;
