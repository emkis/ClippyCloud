<template>
  <BaseCard class="UploadCard" fileName="HelloWorld.ts">
    <template #top>
      <div class="UploadCard__head">
        <div class="UploadCard__circle">
          <h4>74%</h4>
        </div>
      </div>
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
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'UploadCard',
  components: { BaseCard, Button },
  props: {
    fileSize: { type: Number, required: true },
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

<style lang="scss" scoped>
.UploadCard {
  &__head {
    position: relative;
    display: grid;
    place-content: center;
    padding: rem(25px 25px 0);
    background: none;
  }

  &__circle {
    $size: rem(144px);
    position: relative;
    width: $size;
    height: $size;
    border-radius: 50%;
    border: 3px solid var(--color-shark);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--concept-text-primary);

    > h4 {
      font-size: rem(16px);
    }

    &::before {
      content: '';
      position: absolute;
    }
  }
}
</style>
