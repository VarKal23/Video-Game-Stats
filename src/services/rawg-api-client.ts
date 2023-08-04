import axios, { AxiosRequestConfig } from 'axios';
import myGames from '../data/myGames';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4136554fc2334d39918bd7a7b5f0ae31',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    let allGames = await (axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
    );
    return allGames 
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export default APIClient;
