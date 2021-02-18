<template>
  <button :class="['Button', `Button--${theme}`]" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Theme, Themes } from './types'

export default defineComponent({
  name: 'Button',
  props: {
    theme: { type: String as PropType<Theme>, default: Themes.Default },
  },
  emits: ['onClick'],
  setup(props, { emit }) {
    const handleClick = () => emit('onClick')

    return { handleClick }
  },
})
</script>

<style lang="scss" scoped>
.Button {
  padding: 18px 38px;
  font-size: rem(16px);
  border: 1px solid transparent;
  border-radius: $border-radius-s;
  color: var(--color-white);
  cursor: pointer;

  &--default {
    background: var(--color-bright-gray);
  }

  &--primary {
    background: var(--color-dodger-blue);
  }

  &--outlined {
    color: var(--color-white);
    border-color: currentColor;
    background: none;
  }

  &--error {
    background: var(--color-geraldine);
  }
}
</style>
