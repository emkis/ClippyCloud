<template>
  <button :class="['Button', `Button--${theme}`]" :disabled="disabled" @click="handleClick">
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
  line-height: 1;
  border: 1px solid transparent;
  border-radius: $border-radius-s;
  color: var(--concept-text-primary);
  user-select: none;
  transition: background-color 200ms, color 200ms, opacity 200ms;
  cursor: pointer;

  &:not(&:disabled):hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &--default {
    background: var(--concept-over-background-element);
  }

  &--primary {
    background: var(--concept-primary-color);
  }

  &--outlined {
    border-color: currentColor;
    background: none;
  }

  &--error {
    background: var(--concept-error-color);
  }

  @media (min-width: 43.75em) {
    font-size: rem(20px);
  }
}
</style>
