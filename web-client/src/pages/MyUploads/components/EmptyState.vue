<template>
  <Container class="EmptyState">
    <Heading class="EmptyState__title" level="1">You don't have any files uploaded yet</Heading>

    <Button theme="primary" @click="handleNavigate">Share now</Button>
  </Container>

  <img class="EmptyState__background" src="@/assets/cards-mansory.svg" alt="A grid of cards" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'EmptyState',
  components: { Container, Heading, Button },
  setup() {
    const { push } = useRouter()
    const handleNavigate = () => push({ name: 'Upload' })

    return { handleNavigate }
  },
})
</script>

<style lang="scss" scoped>
.EmptyState {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
