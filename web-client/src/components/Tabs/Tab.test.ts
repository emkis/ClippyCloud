import { nextTick } from 'vue'
import { render, fireEvent } from '@testing-library/vue'

import { Tab } from './index'

interface TabProps {
  name: string
  total?: number
  disabled: boolean
}

const mockClickHandler = jest.fn()
const mockActiveTabName = 'fake-tab-name'

function renderTab({ disabled, name, total }: TabProps) {
  return render(Tab, {
    props: { name, total, disabled },
    global: {
      provide: {
        activeTab: { value: mockActiveTabName },
        tabChangeEmitter: mockClickHandler,
      },
    },
  })
}

describe('<Tab />', () => {
  it('should render Tab with name correctly', async () => {
    const { findByRole } = renderTab({ name: 'Cool Tab', disabled: false })

    expect(await findByRole('button')).toHaveTextContent('Cool Tab')
  })

  describe('when prop `disabled` is `true', () => {
    it('should not trigger handler on click', async () => {
      const { findByRole } = renderTab({ name: '', disabled: true })

      const tab = await findByRole('button')
      await fireEvent.click(tab)

      expect(mockClickHandler).not.toHaveBeenCalled()
    })

    it('should be disabled', async () => {
      const { findByRole } = renderTab({ name: '', disabled: true })

      const tab = await findByRole('button')

      expect(tab).toBeDisabled()
    })
  })

  it('should not render badge when `total` prop is not provided', async () => {
    const { queryByTestId } = renderTab({ name: '', disabled: false })

    await nextTick()

    expect(queryByTestId('badge')).not.toBeInTheDocument()
  })

  it('should render correct badge when `total` prop is provided', async () => {
    const { queryByTestId } = renderTab({ name: 'is Watching', disabled: false, total: 235 })

    await nextTick()
    const badge = queryByTestId('badge')

    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent('235')
  })

  it('should trigger handler with tab name when is pressed', async () => {
    const { findByRole } = renderTab({ name: 'Coool', disabled: false })

    const tab = await findByRole('button')
    await fireEvent.click(tab)

    expect(mockClickHandler).toHaveBeenNthCalledWith(1, 'Coool')
  })

  it('should have expected attributes when is active', async () => {
    const { findByRole } = renderTab({ name: mockActiveTabName, disabled: false })

    const tab = await findByRole('button')

    expect(tab).toHaveClass('Tab--active')
  })
})
