import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

console.log('COMMIT_HASH', COMMIT_HASH)
console.log('Main file', import.meta.filepath, import.meta.dirname, import.meta.filename)

app.use(createPinia())
app.use(router)

app.mount('#app')
