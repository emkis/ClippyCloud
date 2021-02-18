<template>
  <component :is="as" class="Text">
    <slot />
  </component>
</template>

<script lang="ts">
import type { Text } from './types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    as: { type: String as PropType<Text>, required: true },
  },
})
</script>

<style lang="scss" scoped>
.Text {
  font-size: rem(18px);
  font-weight: 400;
  color: var(--color-cadet-blue);

  @media (min-width: 43.75em) {
    font-size: rem(20px);
  }
}
</style>
