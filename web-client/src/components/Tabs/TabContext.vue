<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, toRefs } from 'vue'

export default defineComponent({
  name: 'TabContext',
  props: {
    activeTab: { type: String, required: true },
  },
  setup(props) {
    const { activeTab } = toRefs(props)
    provide('activeTab', activeTab)
  },
})
</script>
