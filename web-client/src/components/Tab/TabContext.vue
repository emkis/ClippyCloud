<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, toRef } from 'vue'

export default defineComponent({
  name: 'TabContext',
  props: {
    activeTab: { type: Object, required: true },
  },
  setup(props) {
    provide('activeTab', toRef(props.activeTab, 'name'))
  },
})
</script>
