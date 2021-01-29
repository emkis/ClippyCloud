<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUser, initializeUser } from '@/hooks/user'
import { WakeUpApi } from '@/services/api/wake-up-api'

export default defineComponent({
  name: 'App',
  setup() {
    initializeUser()
    WakeUpApi.init()
    const { user } = useUser()

    return { user }
  },
})
</script>
