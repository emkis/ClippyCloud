<template>
  <Button theme="error" @onClick="handleClick">Try again</Button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Error',
  components: { Button },
  setup() {
    const { retryUploadFileById } = useFile()

    const fileId = inject('fileId') as string
    const handleClick = () => retryUploadFileById(fileId)

    return { handleClick }
  },
})
</script>
