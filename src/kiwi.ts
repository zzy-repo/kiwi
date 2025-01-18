interface KiwiOptions {
  defaultHeaders?: Record<string, string>
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  method?: RequestMethod
  headers?: Record<string, string>
  body?: BodyInit | null
}

interface KiwiInstance {
  request: <T>(url: string, options?: RequestOptions) => Promise<T>
}

function createKiwi(options: KiwiOptions): KiwiInstance {
  const { defaultHeaders = {} } = options

  /**
   * 发送请求
   * @param url 请求地址
   * @param options 请求配置
   * @returns 返回解析后的数据
   */
  async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const { method = 'GET', headers = {}, body = null } = options

    // 合并请求头
    const requestHeaders = {
      ...defaultHeaders,
      ...headers,
    }

    // 发送请求
    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : null,
    })

    // 检查响应状态
    if (!response.ok) {
      console.error(`Request failed with status ${response.status}`)
      throw new Error(`Request failed with status ${response.status}`)
    }

    // 解析响应数据
    return response.json() as Promise<T>
  }

  return {
    request,
  }
}

export default createKiwi
