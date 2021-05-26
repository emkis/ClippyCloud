import { render } from '@testing-library/vue'
import Navbar from './Navbar.vue'

interface INavbarProps {
  linkName: string
  routeName: string
}

describe('<Navbar />', () => {
  beforeEach(jest.clearAllMocks)

  function renderNavbar(props: INavbarProps) {
    return render(Navbar, {
      props,
      global: {
        stubs: ['RouterLink'],
      },
    })
  }

  it('should render links correctly', async () => {
    const { findByTestId } = renderNavbar({
      linkName: 'Target Page Title',
      routeName: 'mockRouteName',
    })

    const backLink = await findByTestId('back-link')
    const externalLink = await findByTestId('external-link')

    expect(backLink).not.toBeNull()
    expect(externalLink).not.toBeNull()
  })
})
