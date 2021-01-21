<template>
  <div class="Home">
    <h1>Clippy Cloud</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const name = {}
    return { name, age: '32' }
  },
})
</script>
