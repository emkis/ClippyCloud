<template>
  <div class="MyUploads">
    <Navbar linkName="Upload Files" routeName="Upload" />

    <EmptyState v-if="!hasUploadedFiles" />

    <template v-else>
      <Container class="MyUploads__container">
        <Heading class="MyUploads__title" level="1">Your uploads</Heading>
        <Text>Here you can see all your uploaded files, expired or not.</Text>
      </Container>

      <Container class="MyUploads__tabs-container">
        <Heading class="MyUploads__tabs-title" level="3">
          Choose file status
        </Heading>

        <TabContext :activeTab="activeTab">
          <TabList @onTabChange="setActiveTab">
            <Tab :name="TabNames.Available" />
            <Tab :name="TabNames.Expired" />
          </TabList>

          <TabLayout class="MyUploads__tabs-grid" :name="TabNames.Available">
            <FileCard
              :key="cardIndex"
              v-for="cardIndex in 3"
              fileName="HelloWord.ts"
              fileExtension="ts"
              :fileSize="34298373"
              createdAt="2021-05-01T00:57:55.875Z"
            />
            <FileCard
              fileName="HelloWord.ts"
              fileExtension="ts"
              :fileSize="34298373"
              createdAt="2021-03-01T00:57:55.875Z"
            />
          </TabLayout>

          <TabLayout class="MyUploads__tabs-grid" :name="TabNames.Expired" />
        </TabContext>
      </Container>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, readonly } from 'vue'

import EmptyState from './components/EmptyState.vue'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { TabContext, TabLayout, TabList, Tab, useTabs } from '@/components/Tab'
import { FileCard } from '@/components/Cards/FileCard'

export default defineComponent({
  name: 'MyUploads',
  components: {
    Navbar,
    Container,
    Heading,
    Text,
    EmptyState,
    TabContext,
    TabLayout,
    TabList,
    Tab,
    FileCard,
  },
  setup() {
    const TabNames = readonly({ Available: 'Available', Expired: 'Expired' })
    const { activeTab, setActiveTab } = useTabs(TabNames.Available)

    const hasUploadedFiles = computed(() => true)

    return { hasUploadedFiles, TabNames, activeTab, setActiveTab }
  },
})
</script>

<style lang="scss" scoped>
.MyUploads {
  overflow-x: hidden;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__title {
    max-width: rem(724px);
    margin-bottom: rem(40px);
  }

  &__tabs-container {
    width: 100%;
    max-width: rem(876px);
    margin: 0 auto;
    padding-top: 0;
    text-align: left;
  }

  &__tabs-title {
    margin-bottom: rem(24px);
  }

  &__tabs-grid {
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
