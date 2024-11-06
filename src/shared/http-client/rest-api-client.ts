import { HttpClient, Options } from './http-client';
import { InvalidJsonResponseError } from './error/InvalidJsonResponseError';

const buildOptions = (options?: Options) => {
    return {
        ...options,
        headers: {
            ...options?.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer KB0vav9u1Re_BdXo9hCbJBqvmeoQReg1'
        },
    };
};

const buildBody = (body?: object) => {
    return JSON.stringify({ ...body});
};

export const buildResult = async <T = any>(response: Response) => {
    const result = {
        data: await getResponseData<T>(response),
        statusCode: response.status,
        statusText: response.statusText,
        headers: response.headers,
    };

    return result;
};

const getResponseData = async <T>(response: Response) => {
    const text = await response.text();

    if (text === '') return '' as unknown as T;

    try {
        return JSON.parse(text) as T;
    } catch (error: any) {
        throw new InvalidJsonResponseError(error.message);
    }
};

const getRequest = async <T = any>(
    url: string,
    params?: Record<string, string>,
    options?: Options
) => {
    let endpoint = url;

    if (params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) =>
            searchParams.set(key, value)
        );

        endpoint += `?${searchParams.toString()}`;
    }

    const response = await HttpClient.get(endpoint, buildOptions(options));

    return buildResult<T>(response);
};

const postRequest = async <T = any>(
    url: string,
    body?: object,
    options?: Options
) => {
    const response = await HttpClient.post(
        url,
        buildBody(body),
        buildOptions(options)
    );

    return buildResult(response);
};

const putRequest = async <T = any>(
    url: string,
    body?: object,
    options?: Options
) => {
    const response = await HttpClient.put(
        url,
        buildBody(body),
        buildOptions(options)
    );

    return buildResult(response);
};

const patchRequest = async <T = any>(
    url: string,
    body?: object,
    options?: Options
) => {
    const response = await HttpClient.patch(
        url,
        buildBody(body),
        buildOptions(options)
    );

    return buildResult(response);
};

const deleteRequest = async <T = any>(
    url: string,
    body?: object,
    options?: Options
) => {
    const response = await HttpClient.delete(
        url,
        buildBody(body),
        buildOptions(options)
    );

    return buildResult(response);
};

export const RestApiClient = {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    patch: patchRequest,
    delete: deleteRequest,
};
