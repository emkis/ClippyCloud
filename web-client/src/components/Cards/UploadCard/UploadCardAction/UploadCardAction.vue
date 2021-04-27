<template>
  <Component :is="ActionComponent" />
</template>

<script lang="ts">
import { defineComponent, inject, computed, Ref } from 'vue'

import { ECardVariants } from '../types'
import { makeActionVariant } from './actionFactory'

export default defineComponent({
  name: 'UploadCardAction',
  setup() {
    const variant = inject('variantName') as Ref<ECardVariants>
    const ActionComponent = computed(() => makeActionVariant(variant.value))

    return { ActionComponent }
  },
})
</script>
