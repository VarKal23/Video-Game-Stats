import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://xbl.io/api/v2/',
  params: {
    key: '7f4bdfb5-55d9-47c5-8eb3-d59aa346f7ca',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // getAll = (config: AxiosRequestConfig) => {
  //   return axiosInstance
  //     .get<FetchResponse<T>>(this.endpoint, config)
  //     .then((res) => res.data);
  // };

  get = () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;
