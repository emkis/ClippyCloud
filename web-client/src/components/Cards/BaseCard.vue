<template>
  <div class="BaseCard">
    <div class="BaseCard__head">
      <slot name="top" />
    </div>

    <div class="BaseCard__content">
      <div class="BaseCard__file-info">
        <h4 class="BaseCard__filename">{{ fileName }}</h4>

        <div class="BaseCard__upload-details" v-if="hasMessage">
          <span>{{ leftMessage }}</span>
          <span>{{ rightMessage }}</span>
        </div>
      </div>

      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseCard',
  props: {
    fileName: { type: String, required: true },
    leftMessage: { type: String },
    rightMessage: { type: String },
  },
  setup(props) {
    const hasMessage = computed(() =>
      Boolean(props.leftMessage || props.rightMessage)
    )

    return { hasMessage }
  },
})
</script>

<style lang="scss" scoped>
.BaseCard {
  border-radius: $border-radius-m;
  background: var(--concept-over-background);
  overflow: auto;

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
    gap: rem(12px);
  }
}
</style>
