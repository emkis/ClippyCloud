<template>
  <div class="CardInfo">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardInfo',
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.CardInfo {
  padding: rem(60px 20px);
  text-align: center;
  border-radius: $border-radius-m;
  background: var(--color-charade);
}
</style>
