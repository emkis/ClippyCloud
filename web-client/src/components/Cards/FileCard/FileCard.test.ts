import * as vue from 'vue'
import { render, fireEvent } from '@testing-library/vue'

import { copyToClipboard as mockCopy } from '@/utilities/strings'
import { getCurrentISODate } from '@/modules/file'

import FileCard from './FileCard.vue'

jest.spyOn(vue, 'provide')

jest.mock('@/utilities/strings', () => ({
  ...jest.requireActual('@/utilities/strings'),
  copyToClipboard: jest.fn(),
}))

function renderFileCard({ isExpired = false } = {}) {
  return render(FileCard, {
    props: {
      isExpired,
      file: {
        id: 'jf938',
        name: 'Fake-File-Name.pdf',
        createdAt: getCurrentISODate(),
        url: 'clippycloud.com',
        size: 84957349,
        extension: 'pdf',
      },
    },
  })
}

describe('<FileCard />', () => {
  beforeEach(jest.clearAllMocks)

  it('should render correctly', async () => {
    const { findByTestId, findByText, findByRole } = renderFileCard()

    const fileName = await findByText('Fake-File-Name.pdf')
    const fileSize = await findByText('81 MB')
    const timeToExpire = await findByText('30 minutes to expire')

    expect(fileSize).toBeInTheDocument()
    expect(fileName).toBeInTheDocument()
    expect(timeToExpire).toBeInTheDocument()
    expect(await findByTestId('head')).toBeInTheDocument()
    expect(await findByRole('button')).toBeInTheDocument()
  })

  it('should provide expected props', async () => {
    renderFileCard()

    expect(vue.provide).toBeCalledTimes(2)
    expect(vue.provide).toBeCalledWith('isExpired', expect.any(Object))
    expect(vue.provide).toBeCalledWith('fileExtension', expect.any(Object))
  })

  it('should not render copy button when file is expired', async () => {
    const { queryByRole } = renderFileCard({ isExpired: true })
    const button = queryByRole('button')

    expect(button).not.toBeInTheDocument()
  })

  it('should copy file url when copy button is pressed', async () => {
    const { findByRole } = renderFileCard()

    const button = await findByRole('button')
    await fireEvent.click(button)

    expect(mockCopy).toHaveBeenNthCalledWith(1, 'clippycloud.com')
  })
})
