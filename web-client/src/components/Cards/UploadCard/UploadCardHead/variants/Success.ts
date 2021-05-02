import { defineComponent, h } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import type { ICardHeadVariant } from '../../types'

import IconCheckMark from '@/components/Icons/IconCheckMark.vue'

const successColor = EThemeConcepts.successColor

const Component = defineComponent({
  name: 'Success',
  components: { IconCheckMark },
  setup() {
    return () => h(IconCheckMark, { size: '54', color: successColor })
  },
})

export const UploadSuccess: ICardHeadVariant = {
  component: Component,
  color: successColor,
}
