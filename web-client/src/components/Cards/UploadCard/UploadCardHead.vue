<template>
  <div class="UploadCardHead">
    <div class="UploadCardHead__container">
      <ProgressCircle
        size="144"
        :progress="uploadProgress"
        :backgroundColor="circleColors.background"
        :foregroundColor="circleColors.foreground"
      />

      <h4>{{ uploadProgress }}%</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { EThemeConcepts, EThemeColors } from '@/services/theme'

import ProgressCircle from './ProgressCircle.vue'

export default defineComponent({
  name: 'UploadCardHead',
  components: { ProgressCircle },
  props: {
    uploadProgress: { type: Number, default: 0 },
  },
  setup() {
    const isUploadComplete = computed(() => false)

    const circleColors = reactive({
      background: isUploadComplete.value
        ? EThemeConcepts.successColor
        : EThemeConcepts.primaryColor,
      foreground: EThemeColors.shark,
    })

    return { circleColors, isUploadComplete }
  },
})
</script>

<style lang="scss" scoped>
.UploadCardHead {
  display: grid;
  place-content: center;
  padding: rem(25px 25px 0);
  background: none;

  &__container {
    position: relative;

    > h4 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: rem(16px);
    }
  }
}
</style>
