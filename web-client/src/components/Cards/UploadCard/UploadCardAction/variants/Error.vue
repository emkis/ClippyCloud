<template>
  <Button theme="error" @onClick="handleAction">Try Again</Button>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Error',
  components: { Button },
  setup() {
    const handleAction = inject('actionHandler') as Ref<() => void>

    return { handleAction }
  },
})
</script>
