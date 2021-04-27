import { ECardVariants } from '../types'

import ActionSuccess from './variants/Success.vue'
import ActionError from './variants/Error.vue'
import ActionInitial from './variants/Initial.vue'
import ActionInvalidFileSize from './variants/InvalidFileSize.vue'
import ActionCanceled from './variants/Canceled.vue'

const ActionVariants = {
  [ECardVariants.Success]: ActionSuccess,
  [ECardVariants.Error]: ActionError,
  [ECardVariants.Initial]: ActionInitial,
  [ECardVariants.InvalidFileSize]: ActionInvalidFileSize,
  [ECardVariants.Canceled]: ActionCanceled,
}

export function makeActionVariant(variant: ECardVariants) {
  return ActionVariants[variant]
}
