import { AxiosError, AxiosInstance } from "axios";

export interface ClientRetryOptions {
  retryTime: number;
  wait?: number;
}

const defaultOptions = {
  retryTime: 1,
  wait: 0,
};

class ClientRetry {
  protected axiosInstance: AxiosInstance;
  private options: ClientRetryOptions;

  constructor(
    axiosInstance: AxiosInstance,
    options?: Partial<ClientRetryOptions>
  ) {
    this.axiosInstance = axiosInstance;
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.handleRetry();
  }

  setOptions = (options: Partial<ClientRetryOptions>) => {
    this.options = {
      ...this.options,
      ...options,
    };
  };

  handleRetry = () => {
    const { retryTime = 1, wait = 0 } = this.options;
    let counter = 0;

    this.axiosInstance.interceptors.response.use(null, (error: AxiosError) => {
      const config = error.config;

      if (counter < retryTime) {
        counter++;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.axiosInstance(config));
          }, wait);
        });
      }
      return Promise.reject(error);
    });
  };
}

export default ClientRetry;
