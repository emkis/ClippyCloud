import { ECardVariants } from '../types'

import Uploading from './variants/Uploading.vue'
import UploadError from './variants/Error.vue'
import UploadSuccess from './variants/Success.vue'
import UploadInvalidFileSize from './variants/InvalidFileSize.vue'

const HeadVariants = {
  [ECardVariants.Success]: UploadSuccess,
  [ECardVariants.Error]: UploadError,
  [ECardVariants.Initial]: Uploading,
  [ECardVariants.InvalidFileSize]: UploadInvalidFileSize,
}

export function makeHeadVariant(variant: ECardVariants) {
  return HeadVariants[variant]
}
