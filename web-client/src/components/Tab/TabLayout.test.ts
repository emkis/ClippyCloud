import { render } from '@testing-library/vue'
import { TabLayout } from './index'

function renderTabLayout({ tabName = 'fake-tab', targetTabName = '' } = {}) {
  return render(TabLayout, {
    props: {
      name: tabName,
    },
    slots: {
      default: '<h1>Tab Content</h1>',
    },
    global: {
      provide: { activeTab: { value: targetTabName } },
    },
  })
}

describe('<TabLayout />', () => {
  it('should display slot content when tab is active', async () => {
    const { container, findByText } = renderTabLayout({
      tabName: 'my-tab',
      targetTabName: 'my-tab',
    })

    expect(container.firstChild).not.toHaveStyle('display: none')
    expect(await findByText('Tab Content')).toBeVisible()
  })

  it('should not display slot content when tab is not active', async () => {
    const { container, findByText } = renderTabLayout({
      tabName: 'my-tab',
      targetTabName: 'my-another-tab',
    })

    expect(container.firstChild).toHaveStyle('display: none')
    expect(await findByText('Tab Content')).not.toBeVisible()
  })
})
