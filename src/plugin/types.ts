// kiwi.ts
export interface KiwiOptions {
    defaultHeaders?: Record<string, string>
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface RequestOptions {
    method?: RequestMethod
    headers?: Record<string, string>
    body?: BodyInit | null
}

export interface KiwiInstance {
    request: <T>(url: string, options?: RequestOptions) => Promise<T>
    // useKiwi: void
}
