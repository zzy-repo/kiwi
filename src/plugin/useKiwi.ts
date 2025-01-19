import {inject} from 'vue';

export function useKiwi() {
    const kiwiInstane = inject('kiwi')
    if (!kiwiInstane) {
        throw new Error('useKiwi must be used within a kiwi-installed app');
    }
    return kiwiInstane
}