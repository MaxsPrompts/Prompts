import { ConnectionError } from './error/ConnectionError';
import { ResponseError } from './error/ResponseError';

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export type Options = Partial<{
  method: keyof typeof HttpMethod;
  headers: Record<string, string>;
  body: BodyInit;
  abortSignal: AbortSignal;
}>;

const handleError = async (response: Response) => {
  const responseInternal = response.clone();
  const text = await responseInternal.text();

  if (!response.ok) {
    const json = text !== undefined ? JSON.parse(text) : {};
    const message = json.message !== undefined ? json.message : text;

    throw new ResponseError(message);
  }
};

const request = async (url: string, options: Options = {}) => {
  const { method, headers, body, abortSignal } = options;

  const response = await fetch(url, {
    method,
    headers,
    body,
    signal: abortSignal,
  }).catch((error) => {
    throw new ConnectionError(error);
  });

  await handleError(response);

  return response;
};

const getRequest = async (url: string, options: Options = {}) => {
  const response = await request(url, {
    ...options,
    method: HttpMethod.GET,
  });

  return response;
};

const postRequest = async (
  url: string,
  body: BodyInit,
  options: Options = {}
) => {
  const response = await request(url, {
    ...options,
    body,
    method: HttpMethod.POST,
  });

  return response;
};

const patchRequest = async (
  url: string,
  body: BodyInit,
  options: Options = {}
) => {
  const response = await request(url, {
    ...options,
    body,
    method: HttpMethod.PATCH,
  });

  return response;
};

const putRequest = async (
  url: string,
  body: BodyInit,
  options: Options = {}
) => {
  const response = await request(url, {
    ...options,
    body,
    method: HttpMethod.PUT,
  });

  return response;
};

const deleteRequest = async (
  url: string,
  body: BodyInit,
  options: Options = {}
) => {
  const response = await request(url, {
    ...options,
    body,
    method: HttpMethod.DELETE,
  });

  return response;
};

export const HttpClient = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  patch: patchRequest,
  delete: deleteRequest,
};
