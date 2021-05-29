import { defineComponent, h } from 'vue'

import type { ICardHeadVariant } from '../../types'
import { EThemeConcepts } from '@/services/theme'
import { IconClose } from '@/components/Icons'

const errorColor = EThemeConcepts.errorColor

const Component = defineComponent({
  name: 'InvalidFileSize',
  components: { IconClose },
  setup() {
    return () =>
      h(IconClose, {
        size: '54',
        color: errorColor,
        'data-testid': 'icon-invalid-size',
      })
  },
})

export const UploadInvalidFileSize: ICardHeadVariant = {
  component: Component,
  color: errorColor,
}
