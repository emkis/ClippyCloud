<template>
  <ProgressCircle
    size="144"
    :progress="progress"
    :progressColor="progressColor"
    :foregroundColor="foregroundColor"
    data-testid="upload-card-progress"
  />
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
import { EThemeColors, EThemeConcepts } from '@/services/theme'

import { ProgressCircle } from '@/components/ProgressCircle'

export default defineComponent({
  name: 'UploadProgressCircle',
  components: { ProgressCircle },
  props: {
    progressColor: { type: String, default: EThemeConcepts.primaryColor },
  },
  setup() {
    const foregroundColor = EThemeColors.shark
    const progress = inject('progress') as Ref<number>

    return { foregroundColor, progress }
  },
})
</script>
