<template>
  <span>{{ fileSize }}</span>
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from 'vue'
import { getReadableSize } from '@/modules/file'

export default defineComponent({
  name: 'FileSize',
  setup() {
    const originalFileSize = inject('fileSize') as Ref<string>
    const fileSize = computed(() =>
      getReadableSize(Number(originalFileSize.value))
    )

    return { fileSize }
  },
})
</script>
