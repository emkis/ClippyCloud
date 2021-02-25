<template>
  <button
    type="button"
    :class="[
      'TabItem',
      { 'TabItem--active': active },
      { 'TabItem--disabled': disabled },
    ]"
    @click="handleSelectTab"
  >
    {{ name }}

    <span class="TabItem__badge">{{ items }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabItem',
  props: {
    name: { type: String, required: true },
    items: { type: Number, default: 0 },
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: {
    onSelected: (tabName: string) => tabName,
  },
  setup(props, { emit }) {
    const handleSelectTab = () => {
      if (!props.disabled) emit('onSelected', props.name)
    }

    return { handleSelectTab }
  },
})
</script>

<style lang="scss" scoped>
.TabItem {
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: rem(20px 28px);
  font-weight: 600;
  border: 0;
  background: var(--concept-over-background);
  color: var(--concept-text-secondary);
  transition: color 200ms, background-color 200ms, opacity 200ms;
  cursor: pointer;
  $this: &;

  &:not(&--disabled):hover {
    opacity: 0.8;
  }

  &--active {
    color: var(--concept-text-primary);
    background: var(--concept-over-background-element);

    #{$this}__badge {
      background: var(--concept-over-background);
    }
  }

  &--disabled {
    color: var(--concept-text-faded);
    cursor: not-allowed;
  }

  &__badge {
    padding: rem(3px 12px);
    font-size: rem(14px);
    line-height: 1;
    border-radius: $border-radius-m;
    background: var(--concept-over-background-element);
  }
}
</style>
