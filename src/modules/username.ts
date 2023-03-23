import { ApiClient } from "../client";
import { AccountUsername } from "../types";

export const usernameModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns account details for a given username. Performs a redirect on the proper account address
     */
    accountDetails: (username: string) => {
      return client.get<AccountUsername>(`/usernames/${username}`);
    },
  };
};
