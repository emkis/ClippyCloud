<template>
  <section class="SectionHowItWorks">
    <Container>
      <Heading level="2">How it works</Heading>
      <Text as="p" class="SectionHowItWorks__description">
        Clippy Cloud is just simple, it was built to make everything easy for
        you.
      </Text>

      <div>
        <CardInfo>
          <Heading level="3">How it works</Heading>
          <Text as="p">
            Clippy Cloud is just simple, it was built to make everything easy
            for you.
          </Text>
        </CardInfo>

        <CardInfo>
          <Heading level="3">How it works</Heading>
          <Text as="p">
            Clippy Cloud is just simple, it was built to make everything easy
            for you.
          </Text>
        </CardInfo>

        <CardInfo>
          <Heading level="3">How it works</Heading>
          <Text as="p">
            Clippy Cloud is just simple, it was built to make everything easy
            for you.
          </Text>
        </CardInfo>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Container from '@/components/Container/index.vue'
import Heading from '@/components/Heading/index.vue'
import Text from '@/components/Text/index.vue'
import CardInfo from '@/pages/Home/components/CardInfo.vue'

export default defineComponent({
  name: 'SectionHowItWorks',
  components: { Container, Heading, Text, CardInfo },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.SectionHowItWorks {
  text-align: center;

  &__description {
    margin: rem(14px 0 72px);
  }

  > div > div {
    display: flex;
    gap: 24px;
  }
}
</style>
