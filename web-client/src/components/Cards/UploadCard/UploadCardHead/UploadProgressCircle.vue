<template>
  <ProgressCircle
    size="144"
    :progress="uploadProgress"
    :backgroundColor="backgroundColor"
    :foregroundColor="foregroundColor"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeColors } from '@/services/theme'

import ProgressCircle from '../ProgressCircle.vue'

export default defineComponent({
  name: 'UploadProgressCircle',
  components: { ProgressCircle },
  props: {
    uploadProgress: { type: Number, default: 0 },
    backgroundColor: { type: String, required: true },
  },
  setup() {
    const foregroundColor = EThemeColors.shark

    return { foregroundColor }
  },
})
</script>
