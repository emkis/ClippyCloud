<template>
  <BaseCard :fileName="fileName">
    <template #top>
      <FileCardHead
        :fileExtension="fileExtension"
        :isExpired="isFileAlreadyExpired"
      />
    </template>

    <template #details>
      <span>{{ formattedFileSize }}</span>
      <span :style="fileStatusStyle">{{ fileTimeStatus }}</span>
    </template>

    <template #bottom v-if="!isFileAlreadyExpired">
      <Button theme="primary" @onClick="handleAction">Copy Link</Button>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'

import { EThemeColors } from '@/services/theme'
import { defaultBaseCardProps } from '../defaultBaseCardProps'
import { getTimeToExpire, isFileExpired } from './timeHelpers'
import { getReadableSize } from '@/modules/file'

import { Button } from '@/components/Button'
import BaseCard from '../BaseCard.vue'
import FileCardHead from './FileCardHead.vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    ...defaultBaseCardProps,
    fileSize: { type: Number, required: true },
    fileExtension: { type: String, required: true },
    createdAt: { type: String, required: true },
  },
  emits: ['onActionClick'],
  components: { BaseCard, FileCardHead, Button },
  setup(props, { emit }) {
    const fileExtension = computed(() => props.fileExtension)

    const isFileAlreadyExpired = computed(() => isFileExpired(props.createdAt))
    const formattedFileSize = computed(() => getReadableSize(props.fileSize))
    const handleAction = () => emit('onActionClick')

    const fileTimeStatus = computed(() => {
      const minutes = getTimeToExpire(props.createdAt)
      return isFileAlreadyExpired.value ? 'Expired' : `${minutes} to expire`
    })

    const fileStatusStyle = computed(() => {
      return isFileAlreadyExpired.value && `color: ${EThemeColors.kournikova}`
    })

    provide('fileExtension', fileExtension)

    return {
      isFileAlreadyExpired,
      fileTimeStatus,
      formattedFileSize,
      handleAction,
      fileStatusStyle,
    }
  },
})
</script>
