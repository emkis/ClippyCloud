<template>
  <Navbar linkName="Upload" routeName="Upload" />

  <Container>
    <h1>My Uploads</h1>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { usePageTitle } from '@/hooks/page-title'

import { Container } from '@/components/Container'
import { Navbar } from '@/components/Navbar'

export default defineComponent({
  name: 'MyUploads',
  components: { Navbar, Container },
  setup() {
    const { meta } = useRoute()
    const { setTitle } = usePageTitle()

    setTitle(meta.title as string)

    return {}
  },
})
</script>

<style lang="scss" scoped></style>
