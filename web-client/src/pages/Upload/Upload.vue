<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container class="UploaderContainer">
    <Heading class="UploaderContainer__title" level="1">
      Upload your files
    </Heading>
    <Text>The files should be maximum of 100mb.</Text>

    <FileUploader
      class="UploaderContainer__file-uploader"
      :maxSize="FILE_MAX_SIZE"
      @onDrop="handleDropFiles"
    />
  </Container>

  <Container class="Files">
    <Heading class="Files__title" level="3" v-if="hasDroppedFiles">
      Uploading files
    </Heading>

    <div class="Files__container">
      <UploadCard
        :key="file.id"
        v-for="file in files"
        :fileName="file.name"
        :fileSize="file.size"
        :progress="file.progress"
        :isFileInvalid="file.invalidSize"
        :isUploadFailed="file.uploadError"
      />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'

import type { CustomFile, DroppedFiles, FileRejection } from './types'

import { FileUpload } from '@/services/api/file-upload'
import { parseFile } from './fileHelpers'
import { useUser } from '@/hooks/user'

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
    const FILE_MAX_SIZE = 100000000 // 100 MB

    const files = reactive<CustomFile[]>([])
    const { user } = useUser()
    const hasDroppedFiles = computed(() => files.length)

    function handleDropFiles(files: DroppedFiles) {
      const { acceptedFiles, rejectedFiles } = files

      handleUpload(acceptedFiles)
      handleRejected(rejectedFiles)
    }

    function handleRejected(rejectedFiles: FileRejection[]) {
      const parsedRejectedFiles = rejectedFiles.map(({ file }) => {
        const parsedFile = parseFile(file)
        parsedFile.invalidSize = true

        return parsedFile
      })

      parsedRejectedFiles.forEach((file) => files.push(file))
    }

    function handleUpload(filesToUpload: File[]) {
      const parsedFiles = filesToUpload.map(parseFile)

      parsedFiles.forEach((file) => files.push(file))
      parsedFiles.forEach(processUpload)
    }

    async function processUpload(droppedFile: CustomFile) {
      const data = new FormData()
      data.append('file', droppedFile.file, droppedFile.name)

      const updateFileProgress = (progress: number) => {
        updateFile(droppedFile.id, { progress })
      }

      try {
        const response = await FileUpload.upload(
          { userId: user.id, formData: data },
          updateFileProgress
        )

        updateFile(droppedFile.id, { url: response.data.url })
      } catch (error) {
        updateFile(droppedFile.id, { uploadError: true })
      }
    }

    function updateFile(fileId: string, data: Partial<CustomFile>) {
      const targetFile = files.find((file) => file.id === fileId)
      Object.assign(targetFile, data)
    }

    return {
      files,
      hasDroppedFiles,
      handleDropFiles,
      FILE_MAX_SIZE,
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
