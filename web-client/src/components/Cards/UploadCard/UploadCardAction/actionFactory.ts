import { h } from 'vue'

import { ECardVariants } from '../types'
import type { DefaultActionProps } from './actionDefaultProps'

import DefaultAction from './variants/Default.vue'
import SuccessAction from './variants/Success.vue'
import ErrorAction from './variants/Error.vue'

// eslint-disable-next-line @typescript-eslint/ban-types
function withText(component: any, text: string) {
  return h(component, { text } as DefaultActionProps)
}

const ActionVariants = {
  [ECardVariants.Success]: withText(SuccessAction, 'Copy link'),
  [ECardVariants.Error]: withText(ErrorAction, 'Try again'),
  [ECardVariants.Initial]: withText(DefaultAction, 'Cancel'),
  [ECardVariants.InvalidFileSize]: withText(DefaultAction, 'Remove file'),
  [ECardVariants.Canceled]: withText(ErrorAction, 'Restart upload'),
}

export function makeActionVariant(variant: ECardVariants) {
  return ActionVariants[variant]
}
