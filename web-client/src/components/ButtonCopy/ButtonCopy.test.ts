import { render, fireEvent } from '@testing-library/vue'
import { copyToClipboard as mockCopy } from '@/utilities/strings'

import { ButtonCopy } from './index'

jest.spyOn(globalThis, 'setTimeout')

jest.mock('@/components/Button/types', () => ({
  EThemes: { Default: 'default' },
}))

jest.mock('@/utilities/strings', () => ({
  copyToClipboard: jest.fn(),
}))

function renderButtonCopy({ value = 'Just random text' } = {}) {
  return render(ButtonCopy, {
    props: { value },
  })
}

describe('<ButtonCopy />', () => {
  beforeEach(jest.clearAllMocks)

  it('should render with initial text', async () => {
    const { findByText } = renderButtonCopy()
    await findByText('Copy link')
  })

  it('should give feedback to user when clicked', async () => {
    const { findByText, getByText } = renderButtonCopy()

    const button = getByText('Copy link')
    await fireEvent.click(button)

    await findByText('Copied')
  })

  it('should change text between initial and clicked state', async () => {
    jest.useFakeTimers()

    const { getByText, findByText } = renderButtonCopy()

    const initialText = 'Copy link'
    const finalText = 'Copied'

    const button = getByText(initialText)
    await fireEvent.click(button)

    await findByText(finalText)
    await findByText(initialText)

    expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 2000)
  })

  it('should copy provided text when clicked', async () => {
    const { getByText } = renderButtonCopy()

    const button = getByText('Copy link')
    await fireEvent.click(button)

    expect(mockCopy).toHaveBeenNthCalledWith(1, 'Just random text')
  })
})
