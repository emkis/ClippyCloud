<template>
  <svg viewBox="0 0 54 54" :fill="color" :height="size" :width="size" aria-hidden="true">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.08 23.898L33.4439 17.534C34.3226 16.6553 35.7472 16.6553 36.6259 17.534C37.5046 18.4127 37.5046 19.8373 36.6259 20.716L30.2619 27.08L36.6259 33.4439C37.5046 34.3226 37.5046 35.7472 36.6259 36.6259C35.7472 37.5046 34.3226 37.5046 33.4439 36.6259L27.0799 30.2619L20.716 36.6259C19.8373 37.5046 18.4127 37.5046 17.534 36.6259C16.6553 35.7472 16.6553 34.3226 17.534 33.4439L23.898 27.08L17.534 20.716C16.6553 19.8373 16.6553 18.4127 17.534 17.534C18.4127 16.6553 19.8373 16.6553 20.716 17.534L27.08 23.898Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { iconDefaultProps } from './defaultProps'

export default defineComponent({
  name: 'IconClose',
  props: { ...iconDefaultProps },
})
</script>
