import { DevLogger } from '@/helpers/dev-logger';

interface HttpResponse<T> extends Response {
  ReadableStream?: T;
}

export function isTimeout(error: Error) {
  return error.message === 'Request timeout' || error.message === 'Network request failed';
}

const TIMEOUT_DURATION = 30000;

async function buildHeaders(isProtected: boolean = true, customHeaders?: object) {
  const httpHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  };

  return { ...httpHeaders, ...customHeaders };
}

async function http<T>(request: RequestInfo, init: RequestInit): Promise<HttpResponse<T>> {
  const debouncedFunc = debounce(async(arg1: any, arg2: any) => { return fetch(arg1, arg2) }, 1000 );

  const response: HttpResponse<T> = await Promise.race([
    await debouncedFunc(request, init),
    new Promise<never>((_, reject) =>
      setTimeout(() => {
        reject(new Error('Request timeout'));
      }, TIMEOUT_DURATION),
    ),
  ]);

  return response;
}

export function debounce<T>(func: (...args: any[]) => Promise<T>, wait: number): (...args: any[]) => Promise<T> {
  let timeout: NodeJS.Timeout;
  let lastArgs: any[] | null = null;

  return function executedFunction(...args: any[]): Promise<T> {
    return new Promise((resolve) => {
      const later = () => {
        clearTimeout(timeout);
        resolve(func(...(lastArgs || args)));
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      lastArgs = args;
    });
  };
}

// GET Method
export async function get<T>(
  path: string,
  isProtected?: boolean,
  headers?: object,
): Promise<HttpResponse<T>> {
  let apiHeaders;
  let log: any = {};

  try {
    const startTime = Date.now();

    apiHeaders = new Headers(await buildHeaders(isProtected, headers));
    log = { method: 'GET', url: path, headers };
    DevLogger.logInfo('⚡REST⚡', 'SEND', log);

    const args: RequestInit = {
      method: 'GET',
      headers: apiHeaders,
    };

    const response = await http<T>(path, args);

    log = { time: `${Date.now() - startTime} ms`, ...log, response };
    DevLogger.logSuccess('⚡REST⚡', 'RESPOND', log);

    return response;
  } catch (e: any) {
    const err = e.response ?? e.error ?? e;

    DevLogger.logError('⚡REST⚡', 'ERROR', { ...log, errorObject: err });
    throw e;
  }
}

// POST Method
export async function post<T>(
  path: string,
  body: any,
  isProtected?: boolean,
  headers?: object,
): Promise<HttpResponse<T>> {
  let apiHeaders;
  let log: any = {};

  try {
    const startTime = Date.now();

    apiHeaders = new Headers(await buildHeaders(isProtected, headers));
    log = { method: 'POST', url: path, headers, body };
    DevLogger.logInfo('⚡REST⚡', 'SEND', log);

    const args: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: apiHeaders,
    };

    const response = await http<T>(path, args);

    log = { time: `${Date.now() - startTime}ms`, ...log, response };
    DevLogger.logSuccess('⚡REST⚡', 'RESPOND', log);

    return response;
  } catch (e: any) {
    const err = e.response ?? e.error ?? e;

    DevLogger.logError('⚡REST⚡', 'ERROR', { ...log, errorObject: err });
    throw e;
  }
}

// PUT Method
export async function put<T>(
  path: string,
  body: any,
  isProtected?: boolean,
  headers?: object,
): Promise<HttpResponse<T>> {
  let apiHeaders;
  let log: any = {};

  try {
    const startTime = Date.now();

    apiHeaders = new Headers(await buildHeaders(isProtected, headers));
    log = { method: 'PUT', url: path, headers, body };
    DevLogger.logInfo('⚡REST⚡', 'SEND', log);

    const args: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: apiHeaders,
    };

    const response = await http<T>(path, args);

    log = { time: `${Date.now() - startTime}ms`, ...log, response };
    DevLogger.logSuccess('⚡REST⚡', 'RESPOND', log);

    return response;
  } catch (e: any) {
    const err = e.response ?? e.error ?? e;

    DevLogger.logError('⚡REST⚡', 'ERROR', { ...log, errorObject: err });
    throw e;
  }
}

// DELETE method
export async function del<T>(
  path: string,
  isProtected?: boolean,
  headers?: object,
): Promise<HttpResponse<T>> {
  let apiHeaders;
  let log: any = {};

  try {
    const startTime = Date.now();

    apiHeaders = new Headers(await buildHeaders(isProtected, headers));
    log = { method: 'DELETE', url: path, headers };
    DevLogger.logInfo('⚡REST⚡', 'SEND', log);

    const args: RequestInit = {
      method: 'DELETE',
      headers: apiHeaders,
    };

    const response = await http<T>(path, args);

    log = { time: `${Date.now() - startTime}ms`, ...log, response };
    DevLogger.logSuccess('⚡REST⚡', 'RESPOND', log);

    return response;
  } catch (e: any) {
    const err = e.response ?? e.error ?? e;

    DevLogger.logError('⚡REST⚡', 'ERROR', { ...log, errorObject: err });
    throw e;
  }
}
