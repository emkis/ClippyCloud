import { provide } from 'vue'
import { render } from '@testing-library/vue'

import { TabContext } from './index'

jest.mock('vue', () => ({
  ...jest.requireActual('vue'),
  provide: jest.fn(),
}))

describe('<TabContext />', () => {
  it('should provide "activeTab" ref', async () => {
    render(TabContext, {
      props: {
        activeTab: 'tab_name_value',
      },
    })

    expect(provide).toHaveBeenCalledTimes(1)
    expect(provide).toHaveBeenCalledWith('activeTab', expect.any(Object))
  })

  it('should not render any children', async () => {
    const wrapper = render(TabContext, {
      props: { activeTab: '' },
    })

    expect(wrapper.html()).toBe('<div></div>')
  })
})
