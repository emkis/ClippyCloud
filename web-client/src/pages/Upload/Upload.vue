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

  <Container class="Files">
    <Heading class="Files__title" level="3">Uploading {{ 5 }} files</Heading>

    <div class="Files__container">
      <UploadCard />
      <UploadCard />
      <UploadCard />
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Container } from '@/components/Container'
import { FileUploader } from './components/FileUploader'
import { UploadCard } from '@/components/Cards/UploadCard'

/*
  const config = {
    onUploadProgress: event => console.log(event.loaded)
  };

  axios.post("/api", data, config);
*/

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
