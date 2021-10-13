<template>
  <div class="TabLayout" v-show="isTabActive">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue'

export default defineComponent({
  name: 'TabLayout',
  props: {
    for: { type: String, required: true },
  },
  setup(props) {
    const activeTab = inject('activeTab') as Ref<string>
    const isTabActive = computed(() => props.for === activeTab.value)

    return { isTabActive }
  },
})
</script>
