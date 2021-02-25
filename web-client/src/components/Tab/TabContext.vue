<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, PropType, provide, toRef } from 'vue'

export default defineComponent({
  name: 'TabContext',
  props: {
    activeTab: { type: Object as PropType<{ name: string }>, required: true },
  },
  setup(props) {
    provide('activeTab', toRef(props.activeTab, 'name'))
  },
})
</script>
