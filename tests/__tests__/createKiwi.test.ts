// createKiwi.test.ts
import createKiwi from './createKiwi';
import fetchMock from 'jest-fetch-mock';

describe('createKiwi', () => {
    beforeEach(() => {
        // 在每个测试之前重置 fetch 的 mock
        fetchMock.resetMocks();
    });

    it('should make a GET request and return data', async () => {
        // 创建 Kiwi 实例
        const kiwi = createKiwi();

        // 模拟 fetch 返回的数据
        fetchMock.mockResponseOnce(JSON.stringify({data: 'test'}));

        // 发送请求
        const response = await kiwi.request<{ data: string }>('https://example.com');

        // 验证 fetch 是否被调用
        expect(fetchMock).toHaveBeenCalledWith('https://example.com', {
            method: 'GET',
            headers: {},
            body: null,
        });

        // 验证返回的数据是否正确
        expect(response).toEqual({data: 'test'});
    });
});