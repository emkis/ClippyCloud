<template>
  <BaseCard class="UploadCard" fileName="HelloWorld.ts">
    <template #top>
      <UploadCardHead :uploadProgress="uploadProgress" />
    </template>

    <template #details>
      <span v-if="hasStatusMessage" :style="statusStyle">
        {{ statusMessage }}
      </span>

      <span v-else>{{ formattedFileSize }}</span>
    </template>

    <template #bottom>
      <Button :theme="actionTheme" @onClick="handleAction">Copy Link</Button>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getReadableSize } from '../helpers'

import BaseCard from '../BaseCard.vue'
import UploadCardHead from './UploadCardHead.vue'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard, Button, UploadCardHead },
  props: {
    fileSize: { type: Number, required: true },
    uploadProgress: { type: [String, Number], required: true },
  },
  emits: ['onActionClick'],
  setup(props, { emit }) {
    const formattedFileSize = computed(() => getReadableSize(props.fileSize))
    const hasStatusMessage = computed(() => true)
    const statusMessage = computed(() => 'File bigger than 100mb')

    const statusStyle = computed(() => ({}))
    const actionTheme = computed(() => 'default')

    const handleAction = () => emit('onActionClick')

    return {
      hasStatusMessage,
      formattedFileSize,
      statusStyle,
      actionTheme,
      handleAction,
      statusMessage,
    }
  },
})
</script>
