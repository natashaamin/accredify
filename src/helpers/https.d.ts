interface HttpResponse<T> extends Response {
    ReadableStream?: T;
}
export declare function isTimeout(error: Error): boolean;
export declare function debounce<T>(func: (...args: any[]) => Promise<T>, wait: number): (...args: any[]) => Promise<T>;
export declare function get<T>(path: string, isProtected?: boolean, headers?: object): Promise<HttpResponse<T>>;
export declare function post<T>(path: string, body: any, isProtected?: boolean, headers?: object): Promise<HttpResponse<T>>;
export declare function put<T>(path: string, body: any, isProtected?: boolean, headers?: object): Promise<HttpResponse<T>>;
export declare function del<T>(path: string, isProtected?: boolean, headers?: object): Promise<HttpResponse<T>>;
export {};
