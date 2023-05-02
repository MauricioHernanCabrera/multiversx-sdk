import { ApiClient } from "../helpers/client";

export const infraModule = (client: ApiClient) => {
  return {
    /**
     * @description Returns 'hello', used for performing health checks
     *
     * @tags infra
     * @request GET:/hello
     */
    healthCheck: () => {
      return client.get<string>(`/hello`);
    },
  };
};
