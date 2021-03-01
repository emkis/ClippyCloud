<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container class="UploaderContainer">
    <Heading class="UploaderContainer__title" level="1">
      Upload your files
    </Heading>
    <Text>The files should be maximum of 100mb.</Text>

    <FileUploader
      class="UploaderContainer__file-uploader"
      @onDrop="handleDropFiles"
    />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Container } from '@/components/Container'
import { FileUploader } from './components/FileUploader'

export default defineComponent({
  name: 'Upload',
  components: {
    Navbar,
    Container,
    Heading,
    Text,
    FileUploader,
  },
  setup() {
    const handleDropFiles = (files: File[]) => console.log(files)

    return { handleDropFiles }
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
