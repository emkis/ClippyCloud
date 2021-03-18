<template>
  <UploadProgressCircle progressColor="transparent" />

  <div class="center-progress">
    <IconClose size="54" :color="errorColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from './UploadProgressCircle.vue'
import IconClose from '@/components/Icons/IconClose.vue'

export default defineComponent({
  name: 'UploadInvalidSize',
  components: { UploadProgressCircle, IconClose },
  setup() {
    const errorColor = EThemeConcepts.errorColor
    const progress = inject('progress') as number

    return { errorColor, progress }
  },
})
</script>
