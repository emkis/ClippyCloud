import { h } from 'vue'

import type { DefaultDetailProps } from './detailDefaultProps'
import { ECardVariants } from '../types'

import DetailError from './variants/Error.vue'
import DetailSuccess from './variants/Success.vue'
import DetailFileSize from './variants/FileSize'
import DetailInvalidFileSize from './variants/InvalidFileSize'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withText(component: any, text: string) {
  return h(component, { text } as DefaultDetailProps)
}

const DetailVariants = {
  [ECardVariants.Success]: withText(DetailSuccess, 'Uploaded'),
  [ECardVariants.Canceled]: withText(DetailError, 'Upload canceled'),
  [ECardVariants.Error]: withText(DetailError, 'Error uploading file'),
  [ECardVariants.Initial]: DetailFileSize,
  [ECardVariants.InvalidFileSize]: DetailInvalidFileSize,
}

export function makeDetailVariant(variant: ECardVariants) {
  return DetailVariants[variant]
}
