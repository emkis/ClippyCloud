<template>
  <BaseCard
    class="FileCard"
    :fileName="fileName"
    :rightMessage="expiredStatus"
    :leftMessage="formattedFileSize"
  >
    <template #top>
      <div class="FileCard__head-container" :style="fileColor.background">
        <IconFile class="FileCard__icon" :color="fileColor.icon" size="124" />
        <h5 class="FileCard__extension">{{ fileExtension || 'PNG' }}</h5>
      </div>
    </template>

    <template #bottom v-if="!isFileExpired">
      <Button :theme="actionTheme" @onClick="handleAction">
        {{ actionText }}
      </Button>
    </template>
  </BaseCard>
</template>

<script lang="ts">
import filesize from 'filesize'
import { computed, defineComponent } from 'vue'

import { defaultCardProps } from './defaultProps'
import { EThemeColors, makeRgba } from '@/services/theme'

import { Button } from '../Button'
import BaseCard from './BaseCard.vue'
import IconFile from '@/components/Icons/IconFile.vue'

export default defineComponent({
  name: 'FileCard',
  props: {
    ...defaultCardProps,
    fileUrl: { type: String, default: '' },
    fileSize: { type: Number, required: true },
    fileExtension: { type: String, required: true },
    timeToExpire: { type: Number, required: true },
  },
  emits: ['onActionClick'],
  components: { BaseCard, Button, IconFile },
  setup(props, { emit }) {
    const isFileExpired = computed(() => false)
    const expiredStatus = computed(() =>
      isFileExpired.value ? 'Expired' : `2min to expire`
    )

    const formattedFileSize = computed(() => filesize(props.fileSize || 449248))
    const fileColor = {
      icon: EThemeColors.grannySmithApple,
      background: {
        'background-color': makeRgba(EThemeColors.grannySmithAppleRGB, 0.25),
      },
    }

    const actionText = computed(() => 'Copy Link')
    const actionTheme = computed(() => 'default')
    const handleAction = () => emit('onActionClick')

    return {
      isFileExpired,
      expiredStatus,
      formattedFileSize,
      actionText,
      actionTheme,
      handleAction,
      fileColor,
    }
  },
})
</script>

<style lang="scss" scoped>
.FileCard {
  user-select: none;

  &__head-container {
    position: relative;
    display: grid;
    place-content: center;
    padding: rem(25px);
    background: none;
  }

  &__extension {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: rem(24px);
  }

  &__icon {
    opacity: 0.3;
  }
}
</style>
