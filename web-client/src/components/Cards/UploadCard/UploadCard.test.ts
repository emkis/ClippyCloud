import * as vue from 'vue'
import { render, fireEvent } from '@testing-library/vue'

import type { CustomFile } from '@/modules/file'
import { copyToClipboard as mockCopy } from '@/utilities/strings'

import UploadCard from './UploadCard.vue'

const mockCancelFileUploadById = jest.fn()
const mockRemoveFileById = jest.fn()
const mockRetryUploadFileById = jest.fn()

jest.spyOn(vue, 'provide')

jest.mock('@/utilities/strings', () => ({
  ...jest.requireActual('@/utilities/strings'),
  copyToClipboard: jest.fn(),
}))

jest.mock('@/contexts/file', () => ({
  useFile: () => ({
    cancelFileUploadById: mockCancelFileUploadById,
    removeFileById: mockRemoveFileById,
    retryUploadFileById: mockRetryUploadFileById,
  }),
}))

function renderUploadCard(file?: Partial<CustomFile>) {
  const defaultFileProps: CustomFile = {
    url: 'clippycloud.com',
    id: '298j2',
    progress: 0,
    size: 92837,
    createdAt: new Date().toISOString(),
    isBiggerThanSizeLimit: false,
    isSettled: false,
    isUploadCanceled: false,
    isUploadFailed: false,
    isUploaded: false,
    name: 'my-mock-file-name.link',
    extension: 'link',
    rawFile: {} as File,
  }

  return render(UploadCard, {
    props: {
      file: { ...defaultFileProps, ...file },
    },
  })
}

describe('<UploadCard />', () => {
  beforeEach(jest.clearAllMocks)

  it('should provide expected properties to children', async () => {
    renderUploadCard()

    expect(vue.provide).toBeCalledTimes(5)
    expect(vue.provide).toBeCalledWith('variantName', expect.any(Object))
    expect(vue.provide).toBeCalledWith('progress', expect.any(Object))
    expect(vue.provide).toBeCalledWith('fileUrl', expect.any(Object))
    expect(vue.provide).toBeCalledWith('fileId', expect.any(String))
    expect(vue.provide).toBeCalledWith('fileSize', expect.any(Number))
  })

  describe('when file is uploading', () => {
    it('should render correctly', async () => {
      const { findByRole, findByText, findByTestId } = renderUploadCard({ progress: 43 })

      const uploadProgress = await findByText('43%')
      const fileName = await findByText('my-mock-file-name.link')
      const fileSize = await findByText('91 KB')
      const progressElement = await findByTestId('upload-card-progress')
      const button = await findByRole('button')

      expect(uploadProgress).toBeInTheDocument()
      expect(fileName).toBeInTheDocument()
      expect(fileSize).toBeInTheDocument()
      expect(progressElement).toBeInTheDocument()

      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Cancel')
    })

    it('should cancel upload when button is pressed', async () => {
      const { findByRole } = renderUploadCard()

      const button = await findByRole('button')
      await fireEvent.click(button)

      expect(mockCancelFileUploadById).toHaveBeenNthCalledWith(1, '298j2')
    })
  })

  describe('when file upload is complete', () => {
    it('should render correctly', async () => {
      const name = 'BestFile.ts'

      const { findByRole, findByText, findByTestId } = renderUploadCard({
        progress: 100,
        isUploaded: true,
        name,
      })

      const successIcon = await findByTestId('icon-success')
      const progressElement = await findByTestId('upload-card-progress')
      const fileName = await findByText(name)
      const fileStatus = await findByText('Uploaded')
      const button = await findByRole('button')

      expect(successIcon).toBeInTheDocument()
      expect(fileName).toBeInTheDocument()
      expect(fileStatus).toBeInTheDocument()
      expect(progressElement).toBeInTheDocument()

      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Copy link')
    })

    it('should copy file url when button is pressed', async () => {
      const fileUrl = 'loremipsum.com'
      const { findByRole } = renderUploadCard({ isUploaded: true, url: fileUrl })

      const button = await findByRole('button')
      await fireEvent.click(button)

      expect(mockCopy).toHaveBeenNthCalledWith(1, fileUrl)
    })
  })

  describe('when file has error', () => {
    it('should render correctly', async () => {
      const name = 'errorFileName.pdf'

      const { findByRole, findByText, findByTestId } = renderUploadCard({
        progress: 74,
        isUploadFailed: true,
        name,
      })

      const errorIcon = await findByTestId('icon-error')
      const progressElement = await findByTestId('upload-card-progress')
      const fileName = await findByText(name)
      const fileStatus = await findByText('Error uploading file')
      const button = await findByRole('button')

      expect(errorIcon).toBeInTheDocument()
      expect(fileName).toBeInTheDocument()
      expect(fileStatus).toBeInTheDocument()
      expect(progressElement).toBeInTheDocument()

      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Try again')
    })

    it('should try again upload when button is pressed', async () => {
      const fileId = '__fake-id__'
      const { findByRole } = renderUploadCard({ isUploadFailed: true, id: fileId })

      const button = await findByRole('button')
      await fireEvent.click(button)

      expect(mockRetryUploadFileById).toHaveBeenNthCalledWith(1, fileId)
    })
  })

  describe('when file upload is canceled', () => {
    it('should render correctly', async () => {
      const { findByRole, findByText, findByTestId } = renderUploadCard({
        progress: 48,
        isUploadCanceled: true,
      })

      const canceledIcon = await findByTestId('icon-canceled')
      const progressElement = await findByTestId('upload-card-progress')
      const fileName = await findByText('my-mock-file-name.link')
      const fileStatus = await findByText('Upload canceled')
      const button = await findByRole('button')

      expect(canceledIcon).toBeInTheDocument()
      expect(fileName).toBeInTheDocument()
      expect(fileStatus).toBeInTheDocument()
      expect(progressElement).toBeInTheDocument()

      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Restart upload')
    })

    it('should restart file upload when button is pressed', async () => {
      const fileId = '@049=+_3-02'
      const { findByRole } = renderUploadCard({ isUploadCanceled: true, id: fileId })

      const button = await findByRole('button')
      await fireEvent.click(button)

      expect(mockRetryUploadFileById).toHaveBeenNthCalledWith(1, fileId)
    })
  })

  describe('when file is bigger than size limit', () => {
    it('should render correctly', async () => {
      const { findByRole, findByText, findByTestId } = renderUploadCard({
        progress: 0,
        isBiggerThanSizeLimit: true,
      })

      const invalidSizeIcon = await findByTestId('icon-invalid-size')
      const progressElement = await findByTestId('upload-card-progress')
      const fileName = await findByText('my-mock-file-name.link')
      const fileStatus = await findByText('File bigger than 100mb')
      const button = await findByRole('button')

      expect(invalidSizeIcon).toBeInTheDocument()
      expect(fileName).toBeInTheDocument()
      expect(fileStatus).toBeInTheDocument()
      expect(progressElement).toBeInTheDocument()

      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Remove file')
    })

    it('should remove file when button is pressed', async () => {
      const fileId = '409kf409kf'
      const { findByRole } = renderUploadCard({ isBiggerThanSizeLimit: true, id: fileId })

      const button = await findByRole('button')
      await fireEvent.click(button)

      expect(mockRemoveFileById).toHaveBeenNthCalledWith(1, fileId)
    })
  })
})
