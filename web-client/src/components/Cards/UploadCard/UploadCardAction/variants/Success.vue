<template>
  <Button theme="primary" @onClick="handleAction">{{ text }}</Button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { actionDefaultProps } from '../actionDefaultProps'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Success',
  components: { Button },
  props: actionDefaultProps,
  setup() {
    const handleAction = inject('variantAction') as () => void

    return { handleAction }
  },
})
</script>
