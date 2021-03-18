<template>
  <div class="UploadCardHeadContainer">
    <div class="UploadCardHeadContainer__inner">
      <component :is="UploadStateComponent" v-bind="{ progress }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'

import Uploading from './Uploading.vue'
import UploadFailed from './UploadFailed.vue'
import UploadSuccess from './UploadSuccess.vue'
import UploadInvalidSize from './UploadInvalidSize.vue'

export default defineComponent({
  name: 'UploadCardHeadContainer',
  props: {
    progress: { type: Number, default: 0 },
    isUploadFailed: { type: Boolean, default: false },
    isFileSizeInvalid: { type: Boolean, default: false },
  },
  setup(props) {
    provide(
      'progress',
      computed(() => props.progress)
    )

    const isUploadComplete = computed(() => props.progress >= 100)

    const UploadStateComponent = computed(() => {
      if (props.isUploadFailed) return UploadFailed
      else if (props.isFileSizeInvalid) return UploadInvalidSize
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
