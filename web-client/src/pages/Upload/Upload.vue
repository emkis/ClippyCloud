<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container class="UploadContainer">
    <Heading class="UploadContainer__title" level="1">
      Upload your files
    </Heading>
    <Text>The files should be maximum of 100mb.</Text>

    <FileUploader
      class="UploadContainer__file-uploader"
      @onDrop="handleDropFiles"
    />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { usePageTitle } from '@/hooks/page-title'

import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Container } from '@/components/Container'
import { FileUploader } from './components/FileUploader'

export default defineComponent({
  name: 'Upload',
  components: { Navbar, Container, Heading, Text, FileUploader },
  setup() {
    const { meta } = useRoute()
    const { setTitle } = usePageTitle()

    setTitle(meta.title as string)

    const handleDropFiles = (files: File[]) => console.log({ files })

    return { handleDropFiles }
  },
})
</script>

<style lang="scss" scoped>
.UploadContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__title {
    margin-bottom: rem(24px);
  }

  &__file-uploader {
    width: 100%;
    max-width: rem(600px);
    margin-top: rem(72px);
  }
}
</style>
