<template>
  <footer class="SectionFooter" v-once>
    <Container class="SectionFooter__container">
      <IconHeart size="54" :color="EThemeConcepts.primaryColor" />

      <Heading class="SectionFooter__title" level="3">Made with love by Emkis</Heading>

      <div class="SectionFooter__links">
        <Text as="span">
          <a href="https://www.linkedin.com/in/nicolas-jardim" rel="noopener">Linkedin</a>
        </Text>

        <Text as="span">
          <a href="http://github.com/emkis" rel="noopener">GitHub</a>
        </Text>
      </div>
    </Container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart } from '@/components/Icons'

export default defineComponent({
  name: 'SectionFooter',
  components: { Container, Heading, Text, IconHeart },
  setup: () => ({ EThemeConcepts }),
})
</script>

<style lang="scss" scoped>
.SectionFooter {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    margin: rem(14px 0);
  }

  &__links {
    display: flex;
    justify-content: center;
    gap: rem(32px);

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
