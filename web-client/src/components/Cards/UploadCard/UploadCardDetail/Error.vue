<template>
  <span :style="detailStyle">Error uploading file</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

export default defineComponent({
  name: 'Error',
  setup() {
    const detailColor = EThemeConcepts.errorColor
    const detailStyle = { color: detailColor } as CSSStyleDeclaration

    return { detailStyle }
  },
})
</script>
