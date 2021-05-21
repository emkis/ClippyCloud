<template>
  <svg
    viewBox="0 0 124 124"
    :fill="color"
    :height="size"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M30.2619 10.3333L70.9714 10.3333C72.804 10.3333 74.5772 10.9827 75.9764 12.1662L100.588 32.9837C102.329 34.4562 103.333 36.6207 103.333 38.9009L103.333 103.764C103.333 113.015 103.228 113.667 93.7381 113.667L30.2619 113.667C20.7723 113.667 20.6667 113.015 20.6667 103.764L20.6667 20.2361C20.6667 10.985 20.7723 10.3333 30.2619 10.3333Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconFile',
  props: { ...iconDefaultProps },
})
</script>
