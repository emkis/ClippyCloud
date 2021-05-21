<template>
  <svg
    viewBox="0 0 40 32"
    fill="none"
    :stroke="color"
    :height="size"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M1.6 16L38.4 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M4.80078 21.001L0.799976 16L4.80078 10.999"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconArrowLeft',
  props: { ...iconDefaultProps },
})
</script>
