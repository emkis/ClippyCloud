<template>
  <nav class="Navbar">
    <div class="Navbar__container">
      <RouterLink :to="{ name: 'Home' }" class="Navbar__back" data-testid="back-link">
        <IconArrowLeft size="44" />
      </RouterLink>

      <RouterLink :to="{ name: routeName }" class="Navbar__link" data-testid="external-link">
        {{ linkName }}
      </RouterLink>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { IconArrowLeft } from '@/components/Icons'

export default defineComponent({
  name: 'Navbar',
  components: { IconArrowLeft },
  props: {
    linkName: { type: String, required: true },
    routeName: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
.Navbar {
  position: sticky;
  top: 0;
  left: 0;
  padding: rem(0 24px);
  background: var(--concept-over-background);
  z-index: $layer_navbar;

  &__container {
    margin: 0 auto;
    max-width: rem(1000px);
    min-height: rem(68px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link,
  &__back {
    color: var(--concept-text-secondary);
    transition: 200ms color ease;

    &:hover {
      color: var(--concept-text-primary);
    }
  }

  &__back {
    cursor: pointer;
    font-size: 0;
  }

  &__link {
    text-decoration: none;
    font-size: rem(18px);
    font-family: $font-title;
    letter-spacing: -0.64px;
    font-weight: 600;
  }
}
</style>
