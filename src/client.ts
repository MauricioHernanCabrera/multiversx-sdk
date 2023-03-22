import axios, { AxiosInstance } from "axios";

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  setHeader = (property: string, data: string) => {
    this.axiosInstance.defaults.headers.common[property] = data;
  };

  setBaseURL = (baseURL: string) => {
    this.axiosInstance.defaults.baseURL = baseURL;
  };

  async get<T>(path: string) {
    const response = await this.axiosInstance.get<T>(path);
    return response.data;
  }

  async post<T, K>(path: string, data: K) {
    const response = await this.axiosInstance.post<T>(path, data);
    return response.data;
  }
}
