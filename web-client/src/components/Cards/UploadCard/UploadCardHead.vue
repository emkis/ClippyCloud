<template>
  <div class="UploadCardHead">
    <div class="UploadCardHead__container">
      <ProgressCircle
        size="144"
        :backgroundColor="circleBackgroundColor"
        :foregroundColor="circleForegroundColor"
      />

      <h4>{{ uploadPercentage }}%</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts, EThemeColors } from '@/services/theme'

import ProgressCircle from './ProgressCircle.vue'

export default defineComponent({
  name: 'UploadCardHead',
  components: { ProgressCircle },
  props: {
    uploadPercentage: { type: [String, Number], default: 0 },
  },
  setup() {
    const circleBackgroundColor = EThemeConcepts.primaryColor
    const circleForegroundColor = EThemeColors.shark

    return { circleBackgroundColor, circleForegroundColor }
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
