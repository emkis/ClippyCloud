<template>
  <BaseCard class="UploadCard" fileName="HelloWorld.ts">
    <template #top>
      <UploadCardHeadContainer :progress="progress" />
    </template>

    <template #details>
      <span :style="statusStyle">{{ statusMessage }}</span>
    </template>

    <template #bottom>
      <Button :theme="actionTheme" @onClick="handleAction">
        {{ actionText }}
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
    const statusMessage = computed(() => {
      if (isUploadComplete.value) return 'Uploaded'
      if (props.isUploadFailed) return 'Error uploading file'
      if (props.isFileInvalid) return 'File bigger than 100mb'
      else return formattedFileSize.value
    })

    const isUploadComplete = computed(() => props.progress >= 100)

    const handleAction = () => emit('onActionClick')
    const actionText = computed(() => {
      if (isUploadComplete.value) return 'Copy link'
      if (props.isUploadFailed || props.isFileInvalid) return 'Try again'
      else return 'Cancel'
    })

    const statusStyle = computed(() => {
      if (isUploadComplete.value) {
        return `color: ${EThemeConcepts.successColor}`
      }
      if (props.isUploadFailed) {
        return `color: ${EThemeConcepts.errorColor}`
      }

      return `color: ${EThemeConcepts.textSecondary}`
    })

    const actionTheme = computed(() => {
      if (isUploadComplete.value) return EThemes.Primary
      if (props.isUploadFailed || props.isFileInvalid) return EThemes.Error
      else return EThemes.Default
    })

    return {
      statusStyle,
      statusMessage,

      actionTheme,
      actionText,
      handleAction,

      isUploadComplete,
    }
  },
})
</script>
