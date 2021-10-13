<template>
  <div class="TabList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'TabList',
  emits: {
    onTabChange: (tabName: string) => tabName,
  },
  setup(_, { emit }) {
    const tabChangeHandler = (tabName: string) => emit('onTabChange', tabName)

    provide('tabChangeEmitter', tabChangeHandler)
  },
})
</script>

<style lang="scss" scoped>
.TabList {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: rem(72px);
  border-radius: $border-radius-s;
  user-select: none;
  overflow: auto;
}
</style>
