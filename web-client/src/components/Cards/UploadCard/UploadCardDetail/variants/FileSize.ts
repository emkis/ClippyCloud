import { defineComponent, inject, computed, h, Ref } from 'vue'

import type { DefaultDetailProps } from '../detailDefaultProps'
import { getReadableSize } from '@/modules/file'

import DefaultDetail from './Default.vue'

export default defineComponent({
  name: 'FileSize',
  render() {
    return h(DefaultDetail, { text: this.fileSize } as DefaultDetailProps)
  },
  setup() {
    const originalFileSize = inject('fileSize') as Ref<string>
    const fileSize = computed(() =>
      getReadableSize(Number(originalFileSize.value))
    )

    return { fileSize }
  },
})
