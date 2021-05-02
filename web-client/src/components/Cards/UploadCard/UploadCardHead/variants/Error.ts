import { defineComponent, h } from 'vue'

import type { ICardHeadVariant } from '../../types'
import { EThemeConcepts } from '@/services/theme'
import IconRefresh from '@/components/Icons/IconRefresh.vue'

const errorColor = EThemeConcepts.errorColor

const Component = defineComponent({
  name: 'Error',
  components: { IconRefresh },
  setup() {
    return () => h(IconRefresh, { size: '54', color: errorColor })
  },
})

export const UploadError: ICardHeadVariant = {
  component: Component,
  color: errorColor,
}
