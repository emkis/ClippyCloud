<template>
  <div class="FileCardHead" :style="backgroundColor">
    <IconFile :color="iconColor" size="124" />
    <h5>{{ fileExtension }}</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
import { useHeadColors } from './colorHelpers'

import IconFile from '@/components/Icons/IconFile.vue'

export default defineComponent({
  name: 'FileCardHead',
  components: { IconFile },
  props: {
    isExpired: { type: Boolean, default: false },
  },
  setup(props) {
    const { icon, background } = useHeadColors(props.isExpired)
    const fileExtension = inject('fileExtension') as Ref<string>

    return {
      fileExtension,
      iconColor: icon,
      backgroundColor: background,
    }
  },
})
</script>

<style lang="scss" scoped>
.FileCardHead {
  position: relative;
  display: grid;
  place-content: center;
  padding: rem(25px);
  background: none;

  > h5 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: rem(20px);
    text-transform: uppercase;
  }

  > svg {
    opacity: 0.3;
  }
}
</style>
