export interface IUploadState {
  status: {
    message: string
    style: string
  }
  action: {
    message: string
    style: string
  }
}

export const enum ECardState {
  Concluded = 'concluded',
  Failed = 'failed',
  FileSizeInvalid = 'file-size-invalid',
  Uploading = 'uploading',
}
