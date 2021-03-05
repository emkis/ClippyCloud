import { fireEvent, render } from '@testing-library/vue'
import Navbar from './Navbar.vue'

interface INavbarProps {
  linkName: string
  routeName: string
}

const mockUseRouter = {
  push: jest.fn(),
  back: jest.fn(),
}

jest.mock('vue-router', () => ({
  useRouter: () => mockUseRouter,
}))

describe('<Navbar />', () => {
  beforeEach(jest.clearAllMocks)

  function renderNavbar(props: INavbarProps) {
    return render(Navbar, { props })
  }

  it('should render links', async () => {
    const { findByTestId } = renderNavbar({
      linkName: 'Target Page Title',
      routeName: 'mockRouteName',
    })

    const backLink = await findByTestId('back-link')
    const externalLink = await findByTestId('external-link')

    expect(backLink).not.toBeNull()
    expect(externalLink).not.toBeNull()
  })

  test('when back link is pressed, should navigate to previous page', async () => {
    const { findByTestId } = renderNavbar({
      linkName: 'Target Page Title',
      routeName: 'mockRouteName',
    })

    const backLink = await findByTestId('back-link')
    await fireEvent.click(backLink)

    expect(mockUseRouter.back).toHaveBeenCalledTimes(1)
  })

  test('when external link is pressed, should navigate to target route', async () => {
    const { findByTestId } = renderNavbar({
      linkName: 'Target Page Title',
      routeName: 'mockRouteName',
    })

    const externalLink = await findByTestId('external-link')
    await fireEvent.click(externalLink)

    expect(mockUseRouter.push).toHaveBeenCalledTimes(1)
    expect(mockUseRouter.push).toHaveBeenCalledWith({ name: 'mockRouteName' })
  })
})
