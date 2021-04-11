<template>
  <UploadProgressCircle progressColor="transparent" />

  <div class="center-progress">
    <IconRefresh size="54" :color="errorColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from '../UploadProgressCircle.vue'
import IconRefresh from '@/components/Icons/IconRefresh.vue'

export default defineComponent({
  name: 'Error',
  components: { UploadProgressCircle, IconRefresh },
  setup() {
    const errorColor = EThemeConcepts.errorColor

    return { errorColor }
  },
})
</script>
