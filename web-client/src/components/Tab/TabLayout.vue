<template>
  <div class="TabLayout">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTab } from './hook'

export default defineComponent({
  name: 'TabLayout',
  props: {
    name: { type: String, required: true },
  },
  setup() {
    useTab()
    return {}
  },
})
</script>
