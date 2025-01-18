import {inject} from 'vue';

export function useKiwi() {
    return inject('kiwi'); // 从依赖注入系统中获取实例
}