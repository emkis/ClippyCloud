import { createApp } from 'vue'

import { useUser } from '@/hooks/user'
import { router } from '@/router'

import App from '@/App.vue'
import '@/styles/global/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

const { initializeUser } = useUser()

initializeUser()
