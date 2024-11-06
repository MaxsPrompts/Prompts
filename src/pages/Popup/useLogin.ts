import { useMutation } from '@tanstack/react-query';
import { getApiURL } from '@shared/url';
import { RestApiClient } from '@shared/http-client';

export type LoginByAccountParams = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export const useLoginByAccount = () => {
  const requestEndpoint = getApiURL(`users/login`);

  return useMutation<LoginResponse, Error, LoginByAccountParams>({
    mutationFn: async (params) => {
      return (await RestApiClient.post(requestEndpoint, params)).data;
    },
  });
};
