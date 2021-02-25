<template>
  <div class="TabLayout" v-if="isTabActive">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue'

export default defineComponent({
  name: 'TabLayout',
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    const activeTab: Ref<string> | undefined = inject('activeTab')

    const isTabActive = computed(() => props.name === activeTab?.value)

    return { isTabActive }
  },
})
</script>
