<template>
  <div class="MyUploads">
    <Navbar linkName="Upload Files" routeName="Upload" />

    <Container class="MyUploads__container">
      <Heading class="MyUploads__title" level="1">
        You don't have any files uploaded yet
      </Heading>

      <Button theme="primary" @click="handleNavigate">Share now</Button>
    </Container>

    <img class="MyUploads__background" src="@/assets/cards-mansory.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePageTitle } from '@/hooks/page-title'

import { Container } from '@/components/Container'
import { Navbar } from '@/components/Navbar'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'MyUploads',
  components: { Navbar, Container, Heading, Button },
  setup() {
    const { meta } = useRoute()
    const { push } = useRouter()
    const { setTitle } = usePageTitle()

    setTitle(meta.title as string)

    const handleNavigate = () => push({ name: 'Upload' })

    return { handleNavigate }
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

  &__background {
    max-width: unset;
    width: 125vw;
    transform: translateX(-10%);
    object-fit: cover;
  }
}
</style>
