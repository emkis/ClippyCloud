import { ECardVariants } from '../types'

import ActionError from './variants/Error.vue'
import ActionSuccess from './variants/Success.vue'
import ActionInitial from './variants/Initial.vue'

const ActionVariants = {
  [ECardVariants.Success]: ActionSuccess,
  [ECardVariants.Error]: ActionError,
  [ECardVariants.Initial]: ActionInitial,
  [ECardVariants.InvalidFileSize]: ActionError,
}

export function makeActionVariant(variant: ECardVariants) {
  return ActionVariants[variant]
}
