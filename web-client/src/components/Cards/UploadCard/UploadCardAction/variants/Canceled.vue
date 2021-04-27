<template>
  <Button theme="error" @onClick="handleClick">Restart upload</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Canceled',
  components: { Button },
  setup() {
    // const { reUploadFile } = useFile()

    // const fileId = inject('fileId') as string

    // const handleClick = () => reUploadFile(fileId)

    // return { handleClick }
    return { handleClick: () => ({}) }
  },
})
</script>
