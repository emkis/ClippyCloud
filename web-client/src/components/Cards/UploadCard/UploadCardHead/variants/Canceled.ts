import { defineComponent, h } from 'vue'
import { EThemeConcepts } from '@/services/theme'

import type { ICardHeadVariant } from '../../types'

import IconRefresh from '@/components/Icons/IconRefresh.vue'

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
