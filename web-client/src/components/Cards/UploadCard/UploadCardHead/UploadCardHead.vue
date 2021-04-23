<template>
  <div class="UploadCardHead">
    <div class="UploadCardHead__inner">
      <component :is="HeadComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue'

import { ECardVariants } from '../types'
import { makeHeadVariant } from './headFactory'

export default defineComponent({
  name: 'UploadCardHead',
  setup() {
    const variant = inject('variant') as Ref<ECardVariants>
    const HeadComponent = computed(() => makeHeadVariant(variant.value))

    return { HeadComponent }
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
