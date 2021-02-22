<template>
  <Navbar linkName="My Uploads" routeName="MyUploads" />

  <Container>
    <h1>Upload</h1>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { usePageTitle } from '@/hooks/page-title'

import { Navbar } from '@/components/Navbar'
import { Container } from '@/components/Container'

export default defineComponent({
  name: 'Upload',
  components: { Navbar, Container },
  setup() {
    const { meta } = useRoute()
    const { setTitle } = usePageTitle()

    setTitle(meta.title as string)
  },
})
</script>

<style scoped></style>
