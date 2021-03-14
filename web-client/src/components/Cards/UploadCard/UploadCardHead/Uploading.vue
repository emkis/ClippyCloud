<template>
  <UploadProgressCircle :progressColor="progressColor" :progress="progress" />

  <div class="center-progress">
    <h4>{{ progress }}%</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { defaultProperties } from './defaultProperties'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from './UploadProgressCircle.vue'

export default defineComponent({
  name: 'Uploading',
  props: defaultProperties,
  components: { UploadProgressCircle },
  setup() {
    const progressColor = EThemeConcepts.primaryColor

    return { progressColor }
  },
})
</script>
