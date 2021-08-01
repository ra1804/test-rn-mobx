import axios, {AxiosResponse} from 'axios';
import {BaseUrl} from './api-config';

export async function getQuotes(): Promise<AxiosResponse> {
  return await axios.get(BaseUrl.quotes);
}
