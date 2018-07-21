import * as queryString from "querystring";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PATCH = "PATCH",
    PUT = "PUT",
}

export function urlJoin(...params: string[]) {
    const re1 = new RegExp('^\\/|\\/$', 'g');
    const elts = Array.prototype.slice.call(params.filter(x => !!x));
    return elts.map(element => element.replace(re1, "")).join('/');
}


export function appendQueryString(url: string, params: any) {
    const parsed = queryString.stringify(params);
    if (parsed.length === 0) {
        return url;
    } else {
        return url + "?" + parsed;
    }
}

export const NetworkErrorCode = -1;

export class NetworkResponse<T = any> {
    statusCode: number;
    response: T;
    ok: boolean;
    error: {
        statusCode: number;
        info: any;
        isNetworkError: boolean;
        isServerError: boolean;
    };

    constructor(statusCode: number, response: T, error?: any) {
        this.statusCode = statusCode;
        this.response = response;
        this.ok = 200 <= statusCode && statusCode < 300;
        this.error = {
            statusCode: statusCode,
            info: error,
            isNetworkError: statusCode === NetworkErrorCode,
            isServerError: statusCode >= 500
        };
    }
}


export interface FetchInfo {
    path?: string;
    method?: HttpMethod;
    queryParams?: any;
    body?: any;
    headers?: { [s: string]: string };
    mode?: RequestMode;
}

export class HttpService {
    async fetchRaw(fetchInfo: FetchInfo = {}): Promise<Response> {
        const body = fetchInfo.body
            ? {body: fetchInfo.body}
            : null;

        const mode = fetchInfo.mode
            ? {mode: fetchInfo.mode}
            : {};

        return await fetch(appendQueryString(fetchInfo.path, fetchInfo.queryParams), {
            method: fetchInfo.method || HttpMethod.GET,
            headers: fetchInfo.headers,
            ...mode,
            ...body
        });
    }

    async fetch<T = any>(fetchInfo: FetchInfo = {}): Promise<NetworkResponse<T>> {
        try {
            const response = await this.fetchRaw({
                ...fetchInfo,
                body: JSON.stringify(fetchInfo.body),
                path: urlJoin(APIROOTURL, fetchInfo.path),
                headers: {
                    'Content-Type': 'application/json',
                    ...fetchInfo.headers,
                }
            });
            return new NetworkResponse(response.status, (await response.json()));
        } catch (e) {
            return new NetworkResponse(NetworkErrorCode, null, e);
        }
    }
}


// export const APIROOTURL: string = "http://127.0.0.1:3000/";
export const APIROOTURL: string = "http://112.74.49.28:3000/";

const http: HttpService = new HttpService();
export default http;