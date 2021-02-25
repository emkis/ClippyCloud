<template>
  <div class="TabLayout" v-if="isTabActive">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTab } from './hook'

export default defineComponent({
  name: 'TabLayout',
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    const { tab } = useTab()

    const isTabActive = computed(() => props.name === tab.activeTabName)

    return { isTabActive }
  },
})
</script>
