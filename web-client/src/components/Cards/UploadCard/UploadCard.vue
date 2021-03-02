<template>
  <BaseCard>
    <template #top>
      <div></div>
    </template>

    <template #details>
      <span v-if="hasMessage" :style="statusStyle">{{ statusMessage }}</span>
      <span v-else>{{ formattedFileSize }}</span>
    </template>

    <template #bottom v-if="!isFileAlreadyExpired">
      <Button theme="primary" @onClick="handleAction">Copy Link</Button>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getReadableSize } from '../helpers'

import BaseCard from '../BaseCard.vue'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard },
  props: {
    fileSize: { type: Number, required: true },
  },
  setup(props) {
    const formattedFileSize = computed(() => getReadableSize(props.fileSize))

    return { formattedFileSize }
  },
})
</script>

<style lang="scss" scoped></style>
