<template>
  <span :style="detailStyle">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { detailDefaultProps } from '../detailDefaultProps'
import { EThemeConcepts } from '@/services/theme'

export default defineComponent({
  name: 'Success',
  props: detailDefaultProps,
  setup() {
    const detailColor = EThemeConcepts.successColor
    const detailStyle: Partial<CSSStyleDeclaration> = { color: detailColor }

    return { detailStyle }
  },
})
</script>
