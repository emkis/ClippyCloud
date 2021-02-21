<template>
  <component :is="as" class="Text">
    <slot />
  </component>
</template>

<script lang="ts">
import { TextType, ETextTypes } from './types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Text',
  props: {
    as: { type: String as PropType<TextType>, default: ETextTypes.P },
  },
})
</script>

<style lang="scss" scoped>
.Text {
  font-size: rem(18px);
  font-weight: 400;
  color: var(--concept-text-secondary);

  @media (min-width: 43.75em) {
    font-size: rem(20px);
  }
}
</style>
