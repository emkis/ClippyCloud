<template>
  <span :style="detailStyle">File bigger than 100mb</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

export default defineComponent({
  name: 'InvalidFileSize',
  setup() {
    const detailColor = EThemeConcepts.errorColor
    const detailStyle = { color: detailColor } as CSSStyleDeclaration

    return { detailStyle }
  },
})
</script>
