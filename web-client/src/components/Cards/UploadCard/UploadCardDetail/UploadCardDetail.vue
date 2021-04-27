<template>
  <Component :is="DetailComponent" />
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from 'vue'

import { ECardVariants } from '../types'
import { makeDetailVariant } from './detailFactory'

export default defineComponent({
  name: 'UploadCardDetail',
  setup() {
    const variant = inject('variantName') as Ref<ECardVariants>
    const DetailComponent = computed(() => makeDetailVariant(variant.value))

    return { DetailComponent }
  },
})
</script>
