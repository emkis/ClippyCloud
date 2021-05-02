import { defineComponent, inject, computed, h } from 'vue'

import type { DefaultDetailProps } from '../detailDefaultProps'
import { getReadableSize } from '@/modules/file'

import DefaultDetail from './Default.vue'

export default defineComponent({
  name: 'FileSize',
  components: { DefaultDetail },
  setup() {
    const originalFileSize = inject('fileSize') as string
    const fileSize = computed(() => getReadableSize(Number(originalFileSize)))
    const props: DefaultDetailProps = { text: fileSize.value }

    return () => h(DefaultDetail, props)
  },
})
