<template>
  <span :style="detailStyle">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { detailDefaultProps } from '../detailDefaultProps'
import { EThemeConcepts } from '@/services/theme'

export default defineComponent({
  name: 'Error',
  props: detailDefaultProps,
  setup() {
    const detailStyle: Partial<CSSStyleDeclaration> = {
      color: EThemeConcepts.errorColor,
    }

    return { detailStyle }
  },
})
</script>
