<template>
  <span>{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { detailDefaultProps } from '../detailDefaultProps'

export default defineComponent({
  name: 'Default',
  props: detailDefaultProps,
})
</script>
