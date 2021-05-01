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
      <ButtonCopy value="fake text for now" />
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, provide, toRefs } from 'vue'

import { EThemeColors } from '@/services/theme'
import { defaultBaseCardProps } from '../defaultBaseCardProps'
import {
  getReadableSize,
  getTimeToExpireFile,
  isFileExpired,
} from '@/modules/file'

import { ButtonCopy } from '@/components/ButtonCopy'
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
  components: { BaseCard, FileCardHead, ButtonCopy },
  setup(props, { emit }) {
    const { fileExtension } = toRefs(props)
    provide('fileExtension', fileExtension)

    const isFileAlreadyExpired = computed(() => isFileExpired(props.createdAt))
    const formattedFileSize = computed(() => getReadableSize(props.fileSize))
    const handleAction = () => emit('onActionClick')

    const fileTimeStatus = computed(() => {
      const minutes = getTimeToExpireFile(props.createdAt)
      return isFileAlreadyExpired.value ? 'Expired' : `${minutes} to expire`
    })

    const fileStatusStyle = computed(() => {
      return isFileAlreadyExpired.value && `color: ${EThemeColors.kournikova}`
    })

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
