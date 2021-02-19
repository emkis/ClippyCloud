<template>
  <section class="SectionHero" v-once>
    <Container>
      <Heading level="1">Clippy Cloud</Heading>
      <Text class="SectionHero__description">
        Easy way to upload and share files quickly for free and no login
        required.
      </Text>

      <div class="SectionHero__actions">
        <Button theme="primary">Upload Files</Button>
        <Button>My Uploads</Button>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Container from '@/components/Container/index.vue'
import Heading from '@/components/Heading/index.vue'
import Text from '@/components/Text/index.vue'
import Button from '@/components/Button/index.vue'

export default defineComponent({
  name: 'SectionHero',
  components: { Container, Heading, Text, Button },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.SectionHero {
  display: grid;
  place-content: center;
  text-align: center;

  &__description {
    margin: rem(24px 0 40px);
  }

  &__actions {
    display: flex;
    gap: rem(14px);
    flex-flow: column nowrap;
  }

  @media (min-width: 43.75em) {
    &__actions {
      justify-content: center;
      flex-flow: row nowrap;
    }
  }
}
</style>
