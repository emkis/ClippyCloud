<template>
  <section class="SectionHero">
    <Heading level="1">Clippy Cloud</Heading>
    <Text class="SectionHero__description" as="p">
      Easy way to upload and share files quickly for free and no login required.
    </Text>

    <div class="SectionHero__actions">
      <Button theme="primary">Upload Files</Button>
      <Button>My Uploads</Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Heading from '@/components/Heading/index.vue'
import Text from '@/components/Text/index.vue'
import Button from '@/components/Button/index.vue'

export default defineComponent({
  name: 'SectionHero',
  components: { Heading, Text, Button },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.SectionHero {
  display: grid;
  place-content: center;
  padding: rem(120px 15px);
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
    padding: rem(160px 15px);

    &__actions {
      justify-content: center;
      flex-flow: row nowrap;
    }
  }
}
</style>
