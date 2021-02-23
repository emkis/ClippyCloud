<template>
  <div class="FileUploader">
    <div class="FileUploader__drop-area">
      <Text>Drag & Drop files here to upload</Text>
      <Button theme="outlined">Browse files</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

export default defineComponent({
  name: 'FileUploader',
  components: { Text, Button },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.FileUploader {
  padding: rem(24px);
  border-radius: $border-radius-m;
  text-align: center;
  color: var(--concept-text-secondary);
  background: var(--concept-over-background);

  &__drop-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: rem(80px 22px);
    border: 2px dashed var(--concept-text-faded);
    border-radius: $border-radius-m;
    transition: border-color 200ms ease, background-color 200ms ease;
    cursor: pointer;

    &:hover {
      border-color: var(--concept-primary-color);
      background: rgba(var(--concept-primary-color-rgb), 0.15);
    }

    > button {
      color: var(--concept-text-secondary);
    }
  }

  @media (min-width: 43.75em) {
    &__drop-area {
      padding: rem(80px 24px);
    }
  }
}
</style>
