<template>
  <div class="UploadCardHead">
    <div class="UploadCardHead__inner">
      <UploadProgressCircle :progressColor="headColor" />

      <div class="center-progress">
        <component :is="HeadComponent" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue'

import { ECardVariants } from '../types'
import { makeHeadVariant } from './headFactory'

import UploadProgressCircle from './UploadProgressCircle.vue'

export default defineComponent({
  name: 'UploadCardHead',
  components: { UploadProgressCircle },
  setup() {
    const variant = inject('variantName') as Ref<ECardVariants>
    const buildedVariant = computed(() => makeHeadVariant(variant.value))

    const HeadComponent = computed(() => buildedVariant.value.component)
    const headColor = computed(() => buildedVariant.value.color)

    return { HeadComponent, headColor }
  },
})
</script>

<style lang="scss" scoped>
.UploadCardHead {
  display: grid;
  place-content: center;
  padding: rem(25px 25px 0);
  background: none;

  &__inner {
    position: relative;

    :deep(.center-progress) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: rem(16px);
      max-height: rem(54px);
    }
  }
}
</style>
