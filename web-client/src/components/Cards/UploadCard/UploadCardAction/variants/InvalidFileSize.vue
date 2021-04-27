<template>
  <Button @onClick="handleClick">Remove file</Button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'InvalidFileSize',
  components: { Button },
  setup() {
    const { removeFileById } = useFile()

    const fileId = inject('fileId') as string
    const handleClick = () => removeFileById(fileId)

    return { handleClick }
  },
})
</script>
