import { defineComponent, h } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import type { ICardHeadVariant } from '../../types'

import IconClose from '@/components/Icons/IconClose.vue'

const errorColor = EThemeConcepts.errorColor

const Component = defineComponent({
  name: 'InvalidFileSize',
  components: { IconClose },
  setup() {
    return () => h(IconClose, { size: '54', color: errorColor })
  },
})

export const UploadInvalidFileSize: ICardHeadVariant = {
  component: Component,
  color: errorColor,
}
