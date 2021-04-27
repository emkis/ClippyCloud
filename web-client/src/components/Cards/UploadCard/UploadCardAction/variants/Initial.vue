<template>
  <Button @onClick="handleClick">Cancel</Button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Initial',
  components: { Button },
  setup() {
    const { cancelFileUploadById } = useFile()

    const fileId = inject('fileId') as string
    const handleClick = () => cancelFileUploadById(fileId)

    return { handleClick }
  },
})
</script>
