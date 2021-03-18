<template>
  <UploadProgressCircle progressColor="transparent" />

  <div class="center-progress">
    <IconRefresh size="54" :color="errorColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from './UploadProgressCircle.vue'
import IconRefresh from '@/components/Icons/IconRefresh.vue'

export default defineComponent({
  name: 'UploadFailed',
  components: { UploadProgressCircle, IconRefresh },
  setup() {
    const errorColor = EThemeConcepts.errorColor
    const progress = inject('progress') as number

    return { errorColor, progress }
  },
})
</script>
