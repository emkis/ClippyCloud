<template>
  <BaseCard class="UploadCard" fileName="HelloWorld.ts">
    <template #top>
      <UploadCardHeadContainer :progress="progress" />
    </template>

    <template #details>
      <span :style="status?.style">{{ status?.message }}</span>
    </template>

    <template #bottom>
      <Button :theme="action?.style" @onClick="handleAction">
        {{ action?.message }}
      </Button>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import { getReadableSize } from '../helpers'
import { EThemeConcepts } from '@/services/theme'
import { IUploadState, ECardState } from './types'

import BaseCard from '../BaseCard.vue'
import UploadCardHeadContainer from './UploadCardHead/UploadCardHeadContainer.vue'
import { Button, EThemes } from '@/components/Button'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard, Button, UploadCardHeadContainer },
  props: {
    fileSize: { type: Number, required: true },
    progress: { type: Number, required: true },
    isFileInvalid: { type: Boolean, default: false },
    isUploadFailed: { type: Boolean, default: false },
  },
  emits: ['onActionClick'],
  setup(props, { emit }) {
    const formattedFileSize = computed(() => getReadableSize(props.fileSize))
    const isUploadComplete = computed(() => props.progress >= 100)
    const handleAction = () => emit('onActionClick')

    const progress = computed(() => props.progress)
    const isFileInvalid = computed(() => props.isFileInvalid)
    const isUploadFailed = computed(() => props.isUploadFailed)

    provide('progress', progress)
    provide('isUploadComplete', isUploadComplete)
    provide('isFileInvalid', isFileInvalid)
    provide('isUploadFailed', isUploadFailed)

    const currentCardState = computed(() => getCardState())

    function getCardState() {
      if (isUploadComplete.value) return ECardState.Concluded
      if (props.isUploadFailed) return ECardState.Failed
      if (props.isFileInvalid) return ECardState.FileSizeInvalid
      else return ECardState.Uploading
    }

    function useCardState() {
      const cardState = new Map<string, IUploadState>()

      cardState.set(ECardState.Concluded, {
        status: {
          message: 'Uploaded',
          style: `color: ${EThemeConcepts.successColor}`,
        },
        action: {
          message: 'Copy link',
          style: EThemes.Primary,
        },
      })

      cardState.set(ECardState.Failed, {
        status: {
          message: 'Error uploading file',
          style: `color: ${EThemeConcepts.errorColor}`,
        },
        action: {
          message: 'Try again',
          style: EThemes.Error,
        },
      })

      cardState.set(ECardState.FileSizeInvalid, {
        status: {
          message: 'File bigger than 100mb',
          style: `color: ${EThemeConcepts.errorColor}`,
        },
        action: {
          message: 'Try again',
          style: EThemes.Error,
        },
      })

      cardState.set(ECardState.Uploading, {
        status: {
          message: formattedFileSize.value,
          style: `color: ${EThemeConcepts.textSecondary}`,
        },
        action: {
          message: 'Cancel',
          style: EThemes.Default,
        },
      })

      return cardState.get(currentCardState.value)
    }

    const state = computed(() => useCardState())

    return {
      handleAction,
      isUploadComplete,
      status: state.value?.status,
      action: state.value?.action,
    }
  },
})
</script>
