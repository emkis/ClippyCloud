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
import filesize from 'filesize'
import { computed, defineComponent } from 'vue'

import { EThemeColors } from '@/services/theme'
import { defaultBaseCardProps } from '../defaultBaseCardProps'
import { defaultFileCardProps } from './defaultFileCardProps'
import { getTimeToExpire, isFileExpired } from './timeHelpers'

import { Button } from '@/components/Button'
import BaseCard from '../BaseCard.vue'
import FileCardHead from './FileCardHead.vue'

function getReadableSize(size: number) {
  const sizeFormatter = filesize.partial({ round: 0 })
  return sizeFormatter(size)
}

export default defineComponent({
  name: 'FileCard',
  props: {
    ...defaultBaseCardProps,
    ...defaultFileCardProps,
    fileSize: { type: Number, required: true },
    createdAt: { type: String, required: true },
  },
  emits: ['onActionClick'],
  components: { BaseCard, FileCardHead, Button },
  setup(props, { emit }) {
    const isFileAlreadyExpired = computed(() => isFileExpired(props.createdAt))

    const fileTimeStatus = computed(() => {
      const minutes = getTimeToExpire(props.createdAt)
      return isFileAlreadyExpired.value ? 'Expired' : `${minutes} to expire`
    })

    const formattedFileSize = computed(() => getReadableSize(props.fileSize))

    const fileStatusStyle = computed(() => {
      return isFileAlreadyExpired.value && `color: ${EThemeColors.kournikova}`
    })

    const handleAction = () => emit('onActionClick')

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
