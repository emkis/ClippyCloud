import { defineComponent, h } from 'vue'

import type { ICardHeadVariant } from '../../types'
import { EThemeConcepts } from '@/services/theme'
import { IconRefresh } from '@/components/Icons'

const errorColor = EThemeConcepts.errorColor

const Component = defineComponent({
  name: 'Canceled',
  components: { IconRefresh },
  setup() {
    return () => h(IconRefresh, { size: '54', color: errorColor })
  },
})

export const UploadCanceled: ICardHeadVariant = {
  component: Component,
  color: errorColor,
}
