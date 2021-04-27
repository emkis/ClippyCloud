<template>
  <Button theme="primary" @onClick="handleClick">Copy link</Button>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
import { copyToClipboard } from '@/utilities/strings'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Success',
  components: { Button },
  setup() {
    const fileUrl = inject('fileUrl') as Ref<string>
    const handleClick = () => copyToClipboard(fileUrl.value)

    return { handleClick }
  },
})
</script>
