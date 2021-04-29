<template>
  <Button theme="primary" @onClick="handleClick">
    {{ isClicked ? 'Copied' : 'Copy link' }}
  </Button>
</template>

<script lang="ts">
import { defineComponent, inject, ref, Ref } from 'vue'
import { copyToClipboard } from '@/utilities/strings'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'Success',
  components: { Button },
  setup() {
    const isClicked = ref(false)
    const fileUrl = inject('fileUrl') as Ref<string>

    const handleClick = () => {
      isClicked.value = true
      setTimeout(() => (isClicked.value = false), 2000)
      copyToClipboard(fileUrl.value)
    }

    return { isClicked, handleClick }
  },
})
</script>
