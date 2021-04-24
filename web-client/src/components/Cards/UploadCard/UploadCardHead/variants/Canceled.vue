<template>
  <UploadProgressCircle :progress="progress" :progressColor="errorColor" />

  <div class="center-progress">
    <IconRefresh size="54" :color="errorColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import UploadProgressCircle from '../UploadProgressCircle.vue'
import IconRefresh from '@/components/Icons/IconRefresh.vue'

export default defineComponent({
  name: 'Canceled',
  components: { UploadProgressCircle, IconRefresh },
  setup() {
    const progress = inject('progress') as Ref<number>
    const errorColor = EThemeConcepts.errorColor

    return { progress, errorColor }
  },
})
</script>
