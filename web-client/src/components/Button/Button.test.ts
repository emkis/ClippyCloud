import { render } from '@testing-library/vue'
import { Button } from '@/components/Button'

describe('<Button />', () => {
  it('emit an event when clicked', async () => {
    const wrapper = render(Button, {
      slots: { default: 'Cool Button' },
    })

    const button = await wrapper.findByText('Cool Button')
    button.click()

    const emittedEvents = wrapper.emitted()

    expect(emittedEvents).toHaveProperty('onClick')
  })

  it(`should not emit an event when is clicked`, async () => {
    const wrapper = render(Button, {
      props: { disabled: true },
      slots: { default: 'Cool Button' },
    })

    const button = await wrapper.findByText('Cool Button')
    button.click()

    const emittedEvents = wrapper.emitted()

    expect(emittedEvents).toMatchObject({})
  })
})
