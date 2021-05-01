<template>
  <ButtonCopy :value="fileUrl" />
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

import { ButtonCopy } from '@/components/ButtonCopy'

export default defineComponent({
  name: 'Success',
  components: { ButtonCopy },
  setup() {
    const fileUrl = inject('fileUrl') as Ref<string>

    return { fileUrl }
  },
})
</script>
