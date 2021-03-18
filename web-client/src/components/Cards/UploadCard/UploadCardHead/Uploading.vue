<template>
  <UploadProgressCircle :progress="progress" />

  <div class="center-progress">
    <h4>{{ progress }}%</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import UploadProgressCircle from './UploadProgressCircle.vue'

export default defineComponent({
  name: 'Uploading',
  components: { UploadProgressCircle },
  setup() {
    const progress = inject('progress') as number

    return { progress }
  },
})
</script>
