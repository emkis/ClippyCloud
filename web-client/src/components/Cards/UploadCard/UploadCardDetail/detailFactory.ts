import { ECardVariants } from '../types'

import DetailError from './variants/Error.vue'
import DetailSuccess from './variants/Success.vue'
import DetailFileSize from './variants/FileSize.vue'
import DetailInvalidFileSize from './variants/InvalidFileSize.vue'

const DetailVariants = {
  [ECardVariants.Success]: DetailSuccess,
  [ECardVariants.Error]: DetailError,
  [ECardVariants.Initial]: DetailFileSize,
  [ECardVariants.InvalidFileSize]: DetailInvalidFileSize,
}

export function makeDetailVariant(variant: ECardVariants) {
  return DetailVariants[variant]
}
