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
})
