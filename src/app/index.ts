import { createApp } from 'vue'
import { router, store } from './providers'
import App from './App.vue'
import { i18n } from '@/shared/config/i18n';


export const application = createApp(App).use(router).use(store).use(i18n)
