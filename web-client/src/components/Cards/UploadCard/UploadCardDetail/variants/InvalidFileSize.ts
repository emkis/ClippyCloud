import { defineComponent, h } from 'vue'

import type { DefaultDetailProps } from '../detailDefaultProps'
import { FILE_MAX_SIZE_FORMATTED } from '@/modules/file/constants'

import ErrorDetail from './Error.vue'

export default defineComponent({
  name: 'InvalidFileSize',
  components: { ErrorDetail },
  setup() {
    const props: DefaultDetailProps = {
      text: `File bigger than ${FILE_MAX_SIZE_FORMATTED}`,
    }

    return () => h(ErrorDetail, props)
  },
})
