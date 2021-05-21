<template>
  <svg
    viewBox="0 0 44 44"
    :fill="color"
    :height="size"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M30.25 8.25C27.2993 8.25 23.8485 11.5952 22 13.75C20.1515 11.5952 16.7008 8.25 13.75 8.25C8.52683 8.25 5.5 12.324 5.5 17.5091C5.5 23.253 11 29.3333 22 35.75C33 29.3333 38.5 23.375 38.5 17.875C38.5 12.6899 35.4732 8.25 30.25 8.25Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconHeart',
  props: { ...iconDefaultProps },
})
</script>
