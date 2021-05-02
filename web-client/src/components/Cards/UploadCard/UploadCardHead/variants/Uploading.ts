import { defineComponent, inject, Ref, h } from 'vue'
import type { ICardHeadVariant } from '../../types'

const Component = defineComponent({
  name: 'Uploading',
  setup() {
    const progress = inject('progress') as Ref<number>
    return () => h('h4', [`${progress.value}%`])
  },
})

export const Uploading: ICardHeadVariant = {
  component: Component,
}
