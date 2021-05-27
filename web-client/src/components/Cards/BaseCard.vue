<template>
  <div class="BaseCard">
    <div class="BaseCard__head" data-testid="head">
      <slot name="top" />
    </div>

    <div class="BaseCard__content">
      <div class="BaseCard__file-info">
        <h4 class="BaseCard__filename" :title="fileName" data-testid="name">
          {{ truncatedFileName }}
        </h4>

        <div class="BaseCard__file-details" data-testid="details">
          <slot name="details" />
        </div>
      </div>

      <slot name="bottom" data-testid="bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { truncate } from '@/utilities/strings'

export default defineComponent({
  name: 'BaseCard',
  props: {
    fileName: { type: String, required: true },
  },
  setup(props) {
    const truncatedFileName = truncate(props.fileName, 35)

    return { truncatedFileName }
  },
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
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    color: var(--concept-text-primary);
  }

  &__file-details {
    display: flex;
    justify-content: space-between;
    gap: rem(12px);
  }
}
</style>
