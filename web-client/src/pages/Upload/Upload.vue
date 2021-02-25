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

    <TabContext :activeTab="activeTab">
      <TabList @onTabChange="handleSelectTab">
        <Tab name="Available" disabled />
        <Tab name="Expired" />
        <Tab name="Tabinha" :total="4" />
      </TabList>

      <TabLayout name="Available"> <h3>Sou a tabinha 1</h3> </TabLayout>
      <TabLayout name="Expired"> <h3>Sou a tabinha 2</h3> </TabLayout>
      <TabLayout name="Tabinha"> <h3>Sou a tabinha 3</h3> </TabLayout>
    </TabContext>
  </Container>
</template>

<script lang="ts">
import { defineComponent, readonly, ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePageTitle } from '@/hooks/page-title'

import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Container } from '@/components/Container'
import { FileUploader } from './components/FileUploader'
import { TabContext, TabLayout, TabList, Tab } from '@/components/Tab'

export default defineComponent({
  name: 'Upload',
  components: {
    Navbar,
    Container,
    Heading,
    Text,
    FileUploader,
    TabContext,
    TabLayout,
    TabList,
    Tab,
  },
  setup() {
    const { meta } = useRoute()
    const { setTitle } = usePageTitle()

    setTitle(String(meta.title))

    const TabNames = readonly({ Available: 'Available', Expired: 'Expired' })

    const handleDropFiles = (files: File[]) => console.log({ files })

    const activeTab = ref(TabNames.Expired)

    const handleSelectTab = (tabName: string) => {
      activeTab.value = tabName
    }

    return {
      handleDropFiles,
      TabNames,
      activeTab,
      handleSelectTab,
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
