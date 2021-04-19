<template>
  <span :style="detailStyle">File bigger than {{ maxFileSize }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { EThemeConcepts } from '@/services/theme'
import { FILE_MAX_SIZE_FORMATTED } from '@/modules/file/constants'

export default defineComponent({
  name: 'InvalidFileSize',
  setup() {
    const detailColor = EThemeConcepts.errorColor
    const detailStyle = { color: detailColor } as CSSStyleDeclaration

    const maxFileSize = FILE_MAX_SIZE_FORMATTED

    return { detailStyle, maxFileSize }
  },
})
</script>
