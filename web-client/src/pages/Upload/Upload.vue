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

  <Container class="FilesContainer">
    <Heading class="FilesContainer__title" level="3">
      Choose file status
    </Heading>

    <TabContainer>
      <TabLayout name="Available">
        <h4>Im a tab content in tab 1</h4>
      </TabLayout>

      <TabLayout name="Expired">
        <h4>Im a tab content in tab 2</h4>
      </TabLayout>

      <TabLayout name="Availables">
        <h4>Im a tab content in tab 3</h4>
      </TabLayout>
    </TabContainer>
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
import { TabContainer, TabLayout, useTab } from '@/components/Tab'

export default defineComponent({
  name: 'Upload',
  components: {
    Navbar,
    Container,
    Heading,
    Text,
    FileUploader,
    TabContainer,
    TabLayout,
  },
  setup() {
    const { meta } = useRoute()
    const { setTitle } = usePageTitle()
    const { setActiveTab } = useTab()

    setTitle(meta.title as string)
    setActiveTab('Available')

    const handleDropFiles = (files: File[]) => console.log({ files })

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

.FilesContainer {
  padding-top: 0;

  &__title {
    margin-bottom: rem(24px);
  }
}
</style>
