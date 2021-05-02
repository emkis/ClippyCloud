export const enum ECardVariants {
  Error = 'error',
  Canceled = 'canceled',
  Initial = 'initial',
  Success = 'success',
  InvalidFileSize = 'invalid-file-size',
}

export interface ICardHeadVariant {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  color?: string | ECardVariants
}
