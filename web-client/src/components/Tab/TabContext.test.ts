import * as vue from 'vue'
import { render } from '@testing-library/vue'

import { TabContext } from './index'

jest.spyOn(vue, 'provide')

describe('<TabContext />', () => {
  it('should provide "activeTab" ref', async () => {
    render(TabContext, {
      props: {
        activeTab: 'tab_name_value',
      },
    })

    expect(vue.provide).toHaveBeenCalledTimes(1)
    expect(vue.provide).toHaveBeenCalledWith('activeTab', expect.any(Object))
  })

  it('should not render any children', async () => {
    const wrapper = render(TabContext, {
      props: { activeTab: '' },
    })

    expect(wrapper.html()).toBe('<div></div>')
  })
})
