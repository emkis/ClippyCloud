<template>
  <BaseCard class="UploadCard" :fileName="fileName">
    <template #top>
      <UploadCardHead />
    </template>

    <template #details>
      <UploadCardDetail />
    </template>

    <template #bottom>
      <UploadCardAction @onClick="handleAction" />
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'

import { ECardVariants } from './types'
import { defaultBaseCardProps } from '../defaultBaseCardProps'

import BaseCard from '../BaseCard.vue'
import { UploadCardHead } from './UploadCardHead'
import { UploadCardAction } from './UploadCardAction'
import { UploadCardDetail } from './UploadCardDetail'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard, UploadCardHead, UploadCardDetail, UploadCardAction },
  props: {
    ...defaultBaseCardProps,
    fileSize: { type: Number, required: true },
    progress: { type: Number, required: true },
    isFileInvalid: { type: Boolean, default: false },
    isUploadFailed: { type: Boolean, default: false },
  },
  emits: ['onActionClick'],
  setup(props, { emit }) {
    const progress = computed(() => props.progress)
    const fileSize = computed(() => props.fileSize)

    const handleAction = () => emit('onActionClick')
    const isUploadComplete = computed(() => props.progress >= 100)

    const variant = computed(() => {
      if (isUploadComplete.value) return ECardVariants.Success
      if (props.isUploadFailed) return ECardVariants.Error
      if (props.isFileInvalid) return ECardVariants.InvalidFileSize
      else return ECardVariants.Initial
    })

    provide('fileSize', fileSize)
    provide('progress', progress)
    provide('variant', variant)

    return { handleAction }
  },
})
</script>
