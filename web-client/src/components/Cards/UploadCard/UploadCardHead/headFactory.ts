import { ECardVariants } from '../types'

import Uploading from './Uploading.vue'
import UploadError from './Error.vue'
import UploadSuccess from './Success.vue'
import UploadInvalidFileSize from './InvalidFileSize.vue'

const HeadVariants = {
  [ECardVariants.Success]: UploadSuccess,
  [ECardVariants.Error]: UploadError,
  [ECardVariants.Initial]: Uploading,
  [ECardVariants.InvalidFileSize]: UploadInvalidFileSize,
}

export function makeHeadVariant(variant: ECardVariants) {
  return HeadVariants[variant]
}
