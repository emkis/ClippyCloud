<template>
  <UploadProgressCircle :progressColor="successColor" />

  <div class="center-progress">
    <IconCheckMark size="54" :color="successColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from '../UploadProgressCircle.vue'
import IconCheckMark from '@/components/Icons/IconCheckMark.vue'

export default defineComponent({
  name: 'Success',
  components: { UploadProgressCircle, IconCheckMark },
  setup() {
    const successColor = EThemeConcepts.successColor

    return { successColor }
  },
})
</script>
