<template>
  <button
    :class="['Button', `Button--${theme}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ThemeType, EThemes } from './types'

export default defineComponent({
  name: 'Button',
  props: {
    theme: { type: String as PropType<ThemeType>, default: EThemes.Default },
    disabled: { type: Boolean, default: false },
  },
  emits: ['onClick'],
  setup(props, { emit }) {
    const handleClick = () => !props.disabled && emit('onClick')

    return { handleClick }
  },
})
</script>

<style lang="scss" scoped>
.Button {
  padding: 18px 38px;
  font-size: rem(18px);
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: $border-radius-s;
  color: var(--color-white);
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

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

  @media (min-width: 43.75em) {
    font-size: rem(20px);
  }
}
</style>
