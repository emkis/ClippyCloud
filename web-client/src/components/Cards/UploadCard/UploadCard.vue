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
import { computed, defineComponent } from 'vue'
import { getReadableSize } from '../helpers'
import { EThemeConcepts } from '@/services/theme'

import BaseCard from '../BaseCard.vue'
import UploadCardHeadContainer from './UploadCardHead/UploadCardHeadContainer.vue'
import { Button, EThemes } from '@/components/Button'

interface IUploadState {
  status: {
    message: string
    style: string
  }
  action: {
    message: string
    style: string
  }
}

const enum ECardState {
  Concluded = 'concluded',
  Failed = 'failed',
  FileSizeInvalid = 'file-size-invalid',
  Uploading = 'uploading',
}

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

    // TODO: provide state

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

      const currentState = getCardState()
      return cardState.get(currentState)
    }

    const state = useCardState()

    return {
      handleAction,
      isUploadComplete,
      status: state?.status,
      action: state?.action,
    }
  },
})
</script>
