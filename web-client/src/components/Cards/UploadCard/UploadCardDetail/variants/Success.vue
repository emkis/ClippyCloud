<template>
  <span :style="detailStyle">Uploaded</span>
</template>

<script lang="ts">
import { EThemeConcepts } from '@/services/theme'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Success',
  setup() {
    const detailColor = EThemeConcepts.successColor
    const detailStyle = { color: detailColor } as CSSStyleDeclaration

    return { detailStyle }
  },
})
</script>
