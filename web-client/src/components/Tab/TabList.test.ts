import * as vue from 'vue'
import { render } from '@testing-library/vue'

import { TabList } from './index'

jest.spyOn(vue, 'provide')

function renderTabList({ slots = {} } = {}) {
  return render(TabList, { slots })
}

describe('<TabList />', () => {
  it('should render expected element in default slot', async () => {
    const { findByTestId } = renderTabList({
      slots: {
        default: `<button data-testid="tab-content" />`,
      },
    })

    await findByTestId('tab-content')
  })

  it('should provide tabChange handler', async () => {
    renderTabList()
    expect(vue.provide).toHaveBeenNthCalledWith(1, expect.any(String), expect.any(Function))
  })
})
