<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container class="UploaderContainer">
    <Heading class="UploaderContainer__title" level="1">
      Upload your files
    </Heading>
    <Text>The files should be maximum of {{ maxFileSize }}.</Text>

    <FileUploader
      class="UploaderContainer__file-uploader"
      @onDrop="handleDropFiles"
    />
  </Container>

  <Container class="Files">
    <Heading class="Files__title" level="3" v-if="hasDroppedFiles">
      {{ isUploading ? 'Uploading' : 'Uploaded' }} files
    </Heading>

    <div class="Files__container">
      <UploadCard :key="file.id" v-for="file in files" :file="file" />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import {
  FILE_MAX_SIZE_FORMATTED,
  DroppedFiles,
  FileRejection,
} from '@/modules/file'

import { useFile } from '@/contexts/file'

import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Container } from '@/components/Container'
import { FileUploader } from './components/FileUploader'
import { UploadCard } from '@/components/Cards/UploadCard'

export default defineComponent({
  name: 'Upload',
  components: {
    Navbar,
    Container,
    Heading,
    Text,
    FileUploader,
    UploadCard,
  },
  setup() {
    const { files, uploadFile, rejectFile } = useFile()

    function handleDropFiles(files: DroppedFiles) {
      const { acceptedFiles, rejectedFiles } = files

      handleUpload(acceptedFiles)
      handleRejected(rejectedFiles)
    }

    function handleUpload(files: File[]) {
      files.forEach(uploadFile)
    }

    function handleRejected(files: FileRejection[]) {
      files.forEach(({ file }: FileRejection) => rejectFile(file))
    }

    const maxFileSize = FILE_MAX_SIZE_FORMATTED
    const hasDroppedFiles = computed(() => Boolean(files.value.length))
    const isUploading = computed(() =>
      files.value.some((file) => !file.isSettled)
    )

    return {
      files,
      maxFileSize,
      isUploading,
      hasDroppedFiles,
      handleDropFiles,
    }
  },
})
</script>

<style lang="scss" scoped>
.UploaderContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__file-uploader {
    width: 100%;
    max-width: rem(600px);
    margin-top: rem(72px);
  }
}

[class$='__title'] {
  margin-bottom: rem(24px);
}

.Files {
  max-width: rem(876px);
  margin: 0 auto;
  padding-top: 0;
  text-align: left;

  &__container {
    display: grid;
    gap: rem(24px);
    grid-template-columns: 1fr;

    @media (min-width: 37.5em) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 53.125em) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
