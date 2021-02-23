<template>
  <component :is="computedAs" :class="['Heading', `Heading--level-${level}`]">
    <slot />
  </component>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { HeadingLevel } from './types'

import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Heading',
  props: {
    level: { type: String as PropType<HeadingLevel>, required: true },
  },
  setup(props) {
    const computedAs = computed(() => `h${props.level}`)
    return { computedAs }
  },
})
</script>

<style lang="scss" scoped>
.Heading {
  font-weight: 800;
  color: var(--concept-text-primary);

  &--level-1 {
    font-size: rem(37px);
  }

  &--level-2 {
    font-size: rem(28px);
  }

  &--level-3 {
    font-size: rem(22px);
  }

  @media (min-width: 43.75em) {
    &--level-1 {
      font-size: rem(64px);
    }

    &--level-2 {
      font-size: rem(38px);
    }

    &--level-3 {
      font-size: rem(24px);
    }
  }
}
</style>
