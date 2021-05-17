<template>
  <div class="FileUploader">
    <div
      :class="['FileUploader__drop-area', { 'FileUploader__drop-area--active': isDragActive }]"
      v-bind="getRootProps()"
    >
      <input v-bind="getInputProps()" />

      <Text>Drag & Drop files here to upload</Text>
      <Button theme="outlined" @click.stop="openFilePicker">Browse files</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDropzone } from 'vue3-dropzone'

import type { FileUploadOptions } from 'vue3-dropzone/dist/useDropzone'
import type { DroppedFiles, FileRejection } from '@/modules/file'

import { FILE_MAX_SIZE } from '@/modules/file/constants'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'FileUploader',
  components: { Text, Button },
  emits: {
    onDrop: (payload: DroppedFiles) => payload,
  },
  props: {
    maxSize: { type: Number, default: FILE_MAX_SIZE },
  },
  setup(props, { emit }) {
    const dropzoneOptions: Partial<FileUploadOptions> = {
      // @ts-expect-error missing lib exported types
      onDrop,
      maxSize: props.maxSize,
    }

    const {
      getRootProps,
      getInputProps,
      open: openFilePicker,
      isDragActive,
    } = useDropzone(dropzoneOptions)

    function onDrop(acceptedFiles: File[], rejectedFiles: FileRejection[]) {
      emit('onDrop', { acceptedFiles, rejectedFiles })
    }

    return {
      getRootProps,
      getInputProps,
      openFilePicker,
      isDragActive,
    }
  },
})
</script>

<style lang="scss" scoped>
.FileUploader {
  padding: rem(24px);
  border-radius: $border-radius-m;
  text-align: center;
  background: var(--concept-over-background);

  &__drop-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: rem(80px 24px);
    border: 2px dashed var(--concept-text-faded);
    border-radius: $border-radius-m;
    transition: border-color 200ms ease, background-color 200ms ease;
    cursor: pointer;

    &:hover,
    &--active {
      border-color: var(--concept-primary-color);
      background: rgba(var(--concept-primary-color-rgb), 0.15);
    }

    > button {
      color: var(--concept-text-secondary);
    }
  }
}
</style>
