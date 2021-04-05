<template>
  <div class="UploadCardHeadContainer">
    <div class="UploadCardHeadContainer__inner">
      <component :is="UploadStateComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, Ref } from 'vue'

import Uploading from './Uploading.vue'
import UploadFailed from './UploadFailed.vue'
import UploadSuccess from './UploadSuccess.vue'
import UploadInvalidSize from './UploadInvalidSize.vue'

export default defineComponent({
  name: 'UploadCardHeadContainer',
  setup() {
    const isUploadComplete = inject('isUploadComplete') as Ref<boolean>
    const isUploadFailed = inject('isUploadFailed') as Ref<boolean>
    const isFileInvalid = inject('isFileInvalid') as Ref<boolean>

    const UploadStateComponent = computed(() => {
      if (isUploadFailed.value) return UploadFailed
      else if (isFileInvalid.value) return UploadInvalidSize
      else if (isUploadComplete.value) return UploadSuccess
      else return Uploading
    })

    return { UploadStateComponent }
  },
})
</script>

<style lang="scss" scoped>
.UploadCardHeadContainer {
  display: grid;
  place-content: center;
  padding: rem(25px 25px 0);
  background: none;

  &__inner {
    position: relative;

    ::v-deep .center-progress {
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
