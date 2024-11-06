import { API_URL } from '../constants';

export const getApiURL = (uri: string) => {
  return `${API_URL}/${uri}`;
};
