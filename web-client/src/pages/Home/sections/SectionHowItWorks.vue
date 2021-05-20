<template>
  <section class="SectionHowItWorks" v-once>
    <Container>
      <Heading level="2">How it works</Heading>
      <Text class="SectionHowItWorks__description">
        Clippy Cloud is just simple, it was built to make everything easy for you.
      </Text>

      <div class="SectionHowItWorks__cards-container">
        <CardInfo
          title="All Files Expire"
          :color="makeRgba(EThemeColors.kournikovaRGB, cardOpacity)"
        >
          <template #icon>
            <IconTimer :color="EThemeColors.kournikova" size="54" />
          </template>

          After 30 minutes, all files expire automatically. Then you can no longer access them.
        </CardInfo>

        <CardInfo
          title="No Login Required"
          :color="makeRgba(EThemeColors.geraldineRGB, cardOpacity)"
        >
          <template #icon>
            <IconFast :color="EThemeColors.geraldine" size="54" />
          </template>

          No data from you will be saved. As long as you stay in the same browser, you can see all
          your uploaded files.
        </CardInfo>

        <CardInfo
          title="For Free Forever"
          :color="makeRgba(EThemeColors.heliotropeRGB, cardOpacity)"
        >
          <template #icon>
            <IconFlower :color="EThemeColors.heliotrope" size="54" />
          </template>

          You will never need to pay for this service. It was created with the intention of
          simplifying your life.
        </CardInfo>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeColors, makeRgba } from '@/services/theme'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import CardInfo from '@/pages/Home/components/CardInfo.vue'
import { IconTimer, IconFlower, IconFast } from '@/components/Icons'

export default defineComponent({
  name: 'SectionHowItWorks',
  components: {
    Container,
    Heading,
    Text,
    CardInfo,
    IconTimer,
    IconFlower,
    IconFast,
  },
  setup() {
    const cardOpacity = 0.25

    return { EThemeColors, makeRgba, cardOpacity }
  },
})
</script>

<style lang="scss" scoped>
.SectionHowItWorks {
  text-align: center;

  &__description {
    margin: rem(14px 0 72px);
  }

  &__cards-container {
    max-width: rem(1073px);
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;
    gap: 24px;

    > * {
      flex: 1 1 rem(335px);
    }
  }

  @media (min-width: 61.25em) {
    &__cards-container {
      flex-flow: row wrap;
    }
  }
}
</style>
