<template>
  <Navbar linkName="Upload Files" routeName="Upload" />

  <div class="MyUploads">
    <EmptyState v-if="!hasUploadedFiles" />

    <template v-else>
      <Container class="MyUploads__container">
        <Heading class="MyUploads__title" level="1">Your uploads</Heading>
        <Text>Here you can see all your uploaded files, expired or not.</Text>
      </Container>

      <Container class="MyUploads__tabs-container">
        <Heading class="MyUploads__tabs-title" level="3">Choose file status</Heading>

        <TabContext :activeTab="activeTab">
          <TabList @onTabChange="setActiveTab">
            <Tab
              :name="TabNames.Available"
              :total="totalAvailable"
              :disabled="totalAvailable === 0"
            />
            <Tab :name="TabNames.Expired" :total="totalExpired" :disabled="totalExpired === 0" />
          </TabList>

          <TabLayout class="MyUploads__tabs-grid" :name="TabNames.Available">
            <FileCard v-for="file in availableFiles" :key="file.id" :file="file" />
          </TabLayout>

          <TabLayout class="MyUploads__tabs-grid" :name="TabNames.Expired">
            <FileCard v-for="file in expiredFiles" :key="file.id" :file="file" isExpired />
          </TabLayout>
        </TabContext>
      </Container>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, readonly, onUnmounted, watchEffect, computed } from 'vue'

import { useAppScroll } from '@/hooks/app-scroll'
import { useFile } from '@/contexts/file'
import { isFileExpired } from '@/modules/file'

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
    const { enableAppScroll, disableAppScroll } = useAppScroll()
    const { storedFiles } = useFile()

    const availableFiles = computed(() =>
      storedFiles.value.filter((file) => !isFileExpired(file.createdAt))
    )

    const expiredFiles = computed(() =>
      storedFiles.value.filter((file) => isFileExpired(file.createdAt))
    )

    const totalAvailable = computed(() => availableFiles.value.length)
    const totalExpired = computed(() => expiredFiles.value.length)

    const hasUploadedFiles = computed(() => Boolean(storedFiles.value.length))
    const handleNoFiles = () => {
      window.scrollTo({ top: 0 })
      disableAppScroll()
    }

    const TabNames = readonly({ Available: 'Available', Expired: 'Expired' })
    const initialTab = () => {
      const hasAvailable = totalAvailable.value > 0
      return hasAvailable ? TabNames.Available : TabNames.Expired
    }

    const { activeTab, setActiveTab } = useTabs(initialTab())

    watchEffect(() => {
      const hasFiles = Boolean(hasUploadedFiles.value)
      hasFiles ? enableAppScroll() : handleNoFiles()
    })

    onUnmounted(() => enableAppScroll())

    return {
      availableFiles,
      totalAvailable,
      expiredFiles,
      totalExpired,
      hasUploadedFiles,
      TabNames,
      activeTab,
      setActiveTab,
    }
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
