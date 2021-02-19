<template>
  <h1>My Uploads</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const { meta } = useRoute()

    document.title = `${document.title} | ${meta.title}`

    return {}
  },
})
</script>

<style scoped></style>
