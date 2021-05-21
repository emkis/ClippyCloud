<template>
  <svg
    viewBox="0 0 54 54"
    :fill="color"
    :height="size"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      opacity="0.3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.55 4.5617C27.176 13.246 32.801 22.9474 28.425 33.666C17.2396 31.8937 11.6146 22.1922 11.55 4.5617Z"
    />
    <path
      opacity="0.3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.1687 4.5617C26.5427 13.246 20.9177 22.9474 25.2937 33.666C36.4791 31.8937 42.1041 22.1922 42.1687 4.5617Z"
    />
    <path
      opacity="0.3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27 2.24036C17.8281 17.541 17.8281 28.7433 27 35.8471C35.7969 28.7433 35.7969 17.541 27 2.24036Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.274 29.1259L39.7259 29.1258C40.9685 29.1258 41.9759 30.1289 41.9759 31.3663C41.9759 31.5844 41.9439 31.8012 41.881 32.0101L36.962 48.337C36.391 50.2324 34.6391 51.5304 32.6518 51.5304L21.3481 51.5304C19.3609 51.5304 17.6089 50.2324 17.0379 48.337L12.1189 32.0101C11.7619 30.8249 12.4373 29.5759 13.6275 29.2203C13.8372 29.1577 14.0551 29.1259 14.274 29.1259Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconFlower',
  props: { ...iconDefaultProps },
})
</script>
