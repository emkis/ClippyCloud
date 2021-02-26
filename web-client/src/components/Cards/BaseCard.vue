<template>
  <div class="BaseCard">
    <div class="BaseCard__head">
      <slot />
    </div>

    <div class="BaseCard__content">
      <div class="BaseCard__file-info">
        <h4 class="BaseCard__filename">Family Photos.zip</h4>

        <div class="BaseCard__upload-details">
          <span>51 MB</span>
          <span>2min to expire</span>
        </div>
      </div>

      <Button theme="primary">Copy link</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../Button'

export default defineComponent({
  name: 'BaseCard',
  components: { Button },
})
</script>

<style lang="scss" scoped>
.BaseCard {
  border-radius: $border-radius-m;
  background: var(--concept-over-background);

  &__content {
    padding: rem(28px);
    display: flex;
    flex-direction: column;
    gap: rem(28px);
  }

  &__filename {
    margin-bottom: 4px;
    font-size: rem(18px);
    color: var(--concept-text-primary);
  }

  &__upload-details {
    display: flex;
    justify-content: space-between;
  }
}
</style>
