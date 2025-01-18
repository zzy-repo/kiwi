import type {App} from 'vue'
import createKiwi from './kiwi.ts';

const kiwi = {
    install(app: App) {
        const kiwiInstance = createKiwi()
        app.provide('myKey', kiwiInstance);
    }
}

export default kiwi