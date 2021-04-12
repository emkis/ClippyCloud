<template>
  <div class="BaseCard">
    <div class="BaseCard__head">
      <slot name="top" />
    </div>

    <div class="BaseCard__content">
      <div class="BaseCard__file-info">
        <h4 class="BaseCard__filename">{{ fileName }}</h4>

        <div class="BaseCard__file-details">
          <slot name="details" />
        </div>
      </div>

      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { defaultBaseCardProps } from './defaultBaseCardProps'

export default defineComponent({
  name: 'BaseCard',
  props: defaultBaseCardProps,
})
</script>

<style lang="scss" scoped>
.BaseCard {
  display: flex;
  flex-flow: column nowrap;
  border-radius: $border-radius-m;
  background: var(--concept-over-background);
  text-align: left;
  user-select: none;
  overflow: auto;

  &__content {
    margin-top: auto;
    padding: rem(28px);
    display: flex;
    flex-direction: column;
    gap: rem(28px);
  }

  &__filename {
    margin-bottom: 4px;
    font-size: rem(18px);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: var(--concept-text-primary);
  }

  &__file-details {
    display: flex;
    justify-content: space-between;
    gap: rem(12px);
  }
}
</style>
