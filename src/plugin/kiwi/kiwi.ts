import type {App} from 'vue'
import createKiwi from './createKiwi.ts';

const kiwi = {
    install(app: App) {
        const kiwiInstance = createKiwi()
        app.provide('kiwi', kiwiInstance);
    }
}

export default kiwi