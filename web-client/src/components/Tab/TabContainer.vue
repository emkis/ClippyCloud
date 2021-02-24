<template>
  <div class="TabContainer">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabContainer',
  props: {},
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.TabContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius-s;
  overflow: auto;
}
</style>
