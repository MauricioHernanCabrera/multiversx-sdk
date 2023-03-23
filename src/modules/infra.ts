import { ApiClient } from "../client";

export const infraModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns 'hello', used for performing health checks
     */
    healthCheck: () => {
      return client.get<string>(`/hello`);
    },
  };
};
