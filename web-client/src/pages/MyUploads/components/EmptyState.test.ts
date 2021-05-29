import { fireEvent, render } from '@testing-library/vue'
import EmptyState from './EmptyState.vue'

const mockRoutePush = jest.fn()

jest.mock('vue-router', () => ({
  useRouter: () => ({ push: mockRoutePush }),
}))

function renderEmptyState() {
  return render(EmptyState)
}

describe('<EmptyState />', () => {
  beforeEach(jest.clearAllMocks)

  it('should render correctly', async () => {
    const { findByRole, findByText, findByAltText } = renderEmptyState()

    const title = await findByText(`You don't have any files uploaded yet`)

    expect(title).toBeInTheDocument()
    expect(await findByRole('button')).toBeInTheDocument()
    expect(await findByAltText('A grid of cards')).toBeInTheDocument()
  })

  it('should redirect to upload page when share button is pressed', async () => {
    const { findByText } = renderEmptyState()

    const button = await findByText('Share now')
    await fireEvent.click(button)

    expect(mockRoutePush).toHaveBeenNthCalledWith(1, { name: 'Upload' })
  })
})
