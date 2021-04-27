<template>
  <Button theme="primary" @onClick="handleClick">Copy link</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useFile } from '@/contexts/file'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Success',
  components: { Button },
  setup() {
    // const {  } = useFile()

    // const fileId = inject('fileId') as string
    // const handleClick = () => removeFileById(fileId)

    // return { handleClick }
    return { handleClick: () => ({}) }
  },
})
</script>
