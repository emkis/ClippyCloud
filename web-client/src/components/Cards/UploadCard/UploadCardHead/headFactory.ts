import { ECardVariants, ICardHeadVariant } from '../types'

import { Uploading } from './variants/Uploading'
import { UploadError } from './variants/Error'
import { UploadSuccess } from './variants/Success'
import { UploadCanceled } from './variants/Canceled'
import { UploadInvalidFileSize } from './variants/InvalidFileSize'

const HeadVariants = {
  [ECardVariants.Success]: UploadSuccess,
  [ECardVariants.Error]: UploadError,
  [ECardVariants.Initial]: Uploading,
  [ECardVariants.InvalidFileSize]: UploadInvalidFileSize,
  [ECardVariants.Canceled]: UploadCanceled,
}

export function makeHeadVariant(variant: ECardVariants): ICardHeadVariant {
  return HeadVariants[variant]
}
