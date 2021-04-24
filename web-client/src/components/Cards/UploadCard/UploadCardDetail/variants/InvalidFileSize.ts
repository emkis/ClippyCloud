import { defineComponent, h } from 'vue'

import type { DefaultDetailProps } from '../detailDefaultProps'
import { FILE_MAX_SIZE_FORMATTED } from '@/modules/file/constants'

import ErrorDetail from './Error.vue'

export default defineComponent({
  name: 'InvalidFileSize',
  render() {
    const maxFileSize = FILE_MAX_SIZE_FORMATTED

    return h(ErrorDetail, {
      text: `File bigger than ${maxFileSize}`,
    } as DefaultDetailProps)
  },
})
