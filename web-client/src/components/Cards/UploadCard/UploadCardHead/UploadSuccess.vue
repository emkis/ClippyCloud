<template>
  <UploadProgressCircle :progress="100" :progressColor="successColor" />

  <div class="center-progress">
    <IconCheckMark size="54" :color="successColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from './UploadProgressCircle.vue'
import IconCheckMark from '@/components/Icons/IconCheckMark.vue'

export default defineComponent({
  name: 'UploadSuccess',
  components: { UploadProgressCircle, IconCheckMark },
  setup() {
    const successColor = EThemeConcepts.successColor
    const progress = inject('progress') as number

    return { successColor, progress }
  },
})
</script>
