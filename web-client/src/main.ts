import { createApp } from 'vue'

import { useUser } from '@/hooks/user'
import { usePageTitle } from '@/hooks/page-title'
import { environment } from '@/configs/environment'
import { router } from '@/router'

import App from '@/App.vue'
import '@/styles/global/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

const { initializeUser } = useUser()
const { setTitle } = usePageTitle({ appendTitle: false })

initializeUser()
setTitle(environment.appTitle)
