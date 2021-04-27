<template>
  <Button theme="error" @onClick="handleClick">Restart upload</Button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Canceled',
  components: { Button },
  setup() {
    const { retryUploadFileById } = useFile()

    const fileId = inject('fileId') as string
    const handleClick = () => retryUploadFileById(fileId)

    return { handleClick }
  },
})
</script>
