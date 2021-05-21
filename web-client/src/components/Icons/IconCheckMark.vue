<template>
  <svg viewBox="0 0 54 54" :fill="color" :height="size" :width="size" aria-hidden="true">
    <path
      d="M37.7302 17.5898C38.578 16.6814 40.0018 16.6323 40.9103 17.4801C41.8187 18.328 41.8678 19.7518 41.0199 20.6602L25.2699 37.5352C24.4473 38.4166 23.0761 38.4929 22.1608 37.7083L14.2858 30.9583C13.3423 30.1496 13.233 28.7292 14.0417 27.7857C14.8504 26.8422 16.2708 26.733 17.2143 27.5417L23.4518 32.8881L37.7302 17.5898Z"
    />
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconCheckMark',
  props: { ...iconDefaultProps },
})
</script>
