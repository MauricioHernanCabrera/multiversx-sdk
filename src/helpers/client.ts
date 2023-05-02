import axios from "axios";
import * as queryString from "query-string";

import ClientRetry from "./client-retry";

export class ApiClient extends ClientRetry {
  constructor() {
    super(axios.create());
  }

  setHeader = (property: string, data: string) => {
    this.axiosInstance.defaults.headers.common[property] = data;
  };

  setBaseURL = (baseURL: string) => {
    this.axiosInstance.defaults.baseURL = baseURL;
  };

  getBaseURL = () => {
    return this.axiosInstance.defaults.baseURL;
  };

  async get<T, K = undefined>(path: string, query?: K) {
    const response = await this.axiosInstance.get<T>(
      `${path}?${queryString.stringify(query)}`
    );
    return response.data;
  }

  async post<T, K>(path: string, data: K) {
    const response = await this.axiosInstance.post<T>(path, data);
    return response.data;
  }
}
