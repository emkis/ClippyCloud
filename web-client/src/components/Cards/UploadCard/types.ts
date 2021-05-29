import type { Component } from 'vue'

export enum ECardVariants {
  Error = 'error',
  Canceled = 'canceled',
  Initial = 'initial',
  Success = 'success',
  InvalidFileSize = 'invalid-file-size',
}

export interface ICardHeadVariant {
  component: Component
  color?: string | ECardVariants
}
