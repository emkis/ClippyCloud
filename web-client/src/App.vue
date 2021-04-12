<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WakeUpApi } from '@/services/api/wake-up-api'

export default defineComponent({
  name: 'App',
  setup() {
    WakeUpApi.init()
  },
})
</script>
