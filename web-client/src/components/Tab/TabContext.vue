<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue'

export default defineComponent({
  name: 'TabContext',
  props: {
    activeTab: { type: String, required: true },
  },
  setup(props) {
    const reactiveActiveTab = computed(() => props.activeTab)

    provide('activeTab', reactiveActiveTab)
  },
})
</script>
