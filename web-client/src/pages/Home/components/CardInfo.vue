<template>
  <div class="CardInfo">
    <div class="CardInfo__circle" :style="computedBackground">
      <slot name="icon" />
    </div>

    <Heading class="CardInfo__title" level="3">{{ title }}</Heading>

    <Text class="CardInfo__description">
      <slot />
    </Text>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

export default defineComponent({
  name: 'CardInfo',
  components: { Heading, Text },
  props: {
    title: { type: String, required: true },
    color: { type: String, default: EThemeConcepts.overBackgroundElement },
  },
  setup(props) {
    const computedBackground = computed(() => ({ background: props.color }))
    return { computedBackground }
  },
})
</script>

<style lang="scss" scoped>
.CardInfo {
  padding: rem(60px 20px);
  display: grid;
  place-content: center;
  text-align: center;
  border-radius: $border-radius-m;
  background: var(--concept-over-background);

  &__circle {
    $circleSize: 150px;
    justify-self: center;
    width: $circleSize;
    height: $circleSize;
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  &__title {
    margin: rem(28px 0 14px);
  }

  &__description {
    max-width: 50ch;
  }
}
</style>
