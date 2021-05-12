<template>
  <BaseCard :fileName="file.name">
    <template #top>
      <FileCardHead />
    </template>

    <template #details>
      <span>{{ formattedSize }}</span>
      <span :style="timeToExpireStyle">{{ timeToExpire }}</span>
    </template>

    <template #bottom v-if="!isExpired">
      <ButtonCopy :value="file.url" />
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, toRefs } from 'vue'

import { EThemeColors } from '@/services/theme'
import { getReadableSize, getTimeToExpireFile, StoredCustomFile } from '@/modules/file'

import { ButtonCopy } from '@/components/ButtonCopy'
import BaseCard from '../BaseCard.vue'
import FileCardHead from './FileCardHead.vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    file: { type: Object as PropType<StoredCustomFile>, required: true },
    isExpired: { type: Boolean as PropType<boolean>, default: false },
  },
  components: { BaseCard, FileCardHead, ButtonCopy },
  setup(props) {
    const { isExpired } = toRefs(props)
    const { extension, createdAt, size } = toRefs(props.file)

    const formattedSize = computed(() => getReadableSize(size.value))

    const timeToExpire = computed(() => {
      const minutes = getTimeToExpireFile(createdAt.value)
      return isExpired.value ? 'Expired' : `${minutes} to expire`
    })

    const timeToExpireStyle = computed(() => {
      return isExpired.value && `color: ${EThemeColors.kournikova}`
    })

    provide('isExpired', isExpired)
    provide('fileExtension', extension)

    return { timeToExpire, formattedSize, timeToExpireStyle }
  },
})
</script>
