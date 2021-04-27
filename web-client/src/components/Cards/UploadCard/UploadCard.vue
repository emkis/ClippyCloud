<template>
  <BaseCard :fileName="file.name">
    <template #top>
      <UploadCardHead />
    </template>

    <template #details>
      <UploadCardDetail />
    </template>

    <template #bottom>
      <UploadCardAction />
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from 'vue'

import { ECardVariants } from './types'

import BaseCard from '../BaseCard.vue'
import { UploadCardHead } from './UploadCardHead'
import { UploadCardAction } from './UploadCardAction'
import { UploadCardDetail } from './UploadCardDetail'

import type { CustomFile } from '@/modules/file'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard, UploadCardHead, UploadCardDetail, UploadCardAction },
  props: {
    file: { type: Object as PropType<CustomFile>, required: true },
  },
  setup(props) {
    const cardVariant = computed(() => {
      if (props.file.isUploaded) return ECardVariants.Success
      if (props.file.isUploadFailed) return ECardVariants.Error
      if (props.file.isBiggerThanSizeLimit) return ECardVariants.InvalidFileSize
      if (props.file.isUploadCanceled) return ECardVariants.Canceled
      else return ECardVariants.Initial
    })

    const progress = computed(() => props.file.progress)
    const fileUrl = computed(() => props.file.url)

    provide('variantName', cardVariant)
    provide('progress', progress)
    provide('fileUrl', fileUrl)
    provide('fileId', props.file.id)
    provide('fileSize', props.file.size)
  },
})
</script>
