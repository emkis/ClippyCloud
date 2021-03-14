<template>
  <ProgressCircle
    size="144"
    :progress="progress"
    :progressColor="progressColor"
    :foregroundColor="foregroundColor"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeColors } from '@/services/theme'
import { defaultProperties } from './defaultProperties'

import ProgressCircle from '../ProgressCircle.vue'

export default defineComponent({
  name: 'UploadProgressCircle',
  components: { ProgressCircle },
  props: {
    ...defaultProperties,
    progressColor: { type: String, required: true },
  },
  setup() {
    const foregroundColor = EThemeColors.shark

    return { foregroundColor }
  },
})
</script>
