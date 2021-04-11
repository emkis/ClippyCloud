import { ECardVariants } from '../types'

import DetailError from './Error.vue'
import DetailSuccess from './Success.vue'
import DetailFileSize from './FileSize.vue'
import DetailInvalidFileSize from './InvalidFileSize.vue'

const DetailVariants = {
  [ECardVariants.Success]: DetailSuccess,
  [ECardVariants.Error]: DetailError,
  [ECardVariants.Initial]: DetailFileSize,
  [ECardVariants.InvalidFileSize]: DetailInvalidFileSize,
}

export function makeDetailVariant(variant: ECardVariants) {
  return DetailVariants[variant]
}
