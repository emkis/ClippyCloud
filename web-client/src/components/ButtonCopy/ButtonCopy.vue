<template>
  <Button theme="primary" @onClick="handleClick">
    <transition name="fade" mode="out-in">
      <span v-if="isClicked">Copied</span>
      <span v-else>Copy link</span>
    </transition>
  </Button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { copyToClipboard } from '@/utilities/strings'

import { Button } from '@/components/Button'

export default defineComponent({
  name: 'ButtonCopy',
  components: { Button },
  props: {
    value: { type: String as PropType<string>, required: true },
  },
  setup(props) {
    const isClicked = ref(false)
    const resetClick = () => setTimeout(() => (isClicked.value = false), 2000)

    const handleClick = () => {
      isClicked.value = true
      copyToClipboard(props.value)
    }

    watch(isClicked, resetClick)

    return { isClicked, handleClick }
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
