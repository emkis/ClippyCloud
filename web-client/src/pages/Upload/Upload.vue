<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container class="UploaderContainer">
    <Heading class="UploaderContainer__title" level="1">Upload your files</Heading>
    <Text>The files should be maximum of {{ maxFileSize }}.</Text>

    <FileUploader class="UploaderContainer__file-uploader" @onDrop="handleDropFiles" />
  </Container>

  <Container class="Files">
    <Heading class="Files__title" level="3" v-show="hasDroppedFiles">
      {{ isUploading ? 'Uploading' : 'Uploaded' }} files
    </Heading>

    <div class="Files__container" ref="filesContainer">
      <UploadCard :key="file.id" v-for="file in files" :file="file" />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'

import { FILE_MAX_SIZE_FORMATTED } from '@/modules/file'
import { useFile } from '@/contexts/file'
import { useDropFiles } from './composables/useDropFiles'

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
    const { files } = useFile()
    const { handleDropFiles } = useDropFiles()

    const filesContainer = ref<HTMLDivElement>()
    const scrollIntoFiles = () => {
      filesContainer.value?.scrollIntoView({ block: 'start' })
    }

    const sortedFiles = computed(() => [...files.value].reverse())
    const hasDroppedFiles = computed(() => Boolean(files.value.length))
    const isUploading = computed(() => files.value.some((file) => !file.isSettled))

    watch(files, scrollIntoFiles, { flush: 'post' })

    return {
      filesContainer,
      files: sortedFiles,
      maxFileSize: FILE_MAX_SIZE_FORMATTED,
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
