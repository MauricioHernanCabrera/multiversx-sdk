import { ApiClient } from "../client";
import { AccountUsername } from "../types";

export const usernameModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns account details for a given username. Performs a redirect on the proper account address
     *
     * @tags username
     * @request GET:/usernames/{username}
     */
    accountUsernameDetails: (username: string) => {
      return client.get<AccountUsername>(`/usernames/${username}`);
    },
  };
};
