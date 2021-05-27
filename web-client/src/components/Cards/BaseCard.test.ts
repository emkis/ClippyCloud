import { nextTick } from 'vue'
import { render } from '@testing-library/vue'

import BaseCard from './BaseCard.vue'

function renderBaseCard({ fileName = '', slots = {} } = {}) {
  return render(BaseCard, {
    slots,
    props: { fileName },
  })
}

describe('<BaseCard />', () => {
  it('should render only name by default', async () => {
    const { queryByTestId } = renderBaseCard({ fileName: 'Lorem Ipsum' })

    await nextTick()
    const cardName = queryByTestId('name')

    expect(cardName).toBeInTheDocument()
    expect(cardName).toHaveTextContent('Lorem Ipsum')

    expect(queryByTestId('head')?.innerHTML).toBeFalsy()
    expect(queryByTestId('details')?.innerHTML).toBeFalsy()
    expect(queryByTestId('bottom')?.innerHTML).toBeFalsy()
  })

  it('should add ellipsis in name when is 35 characters', async () => {
    const { queryByTestId } = renderBaseCard({
      fileName: 'File Name Very Much Long I Cant Read Now',
    })

    const cardName = queryByTestId('name')
    expect(cardName).toHaveTextContent('File Name Very Much Long I Cant Rea...')
  })

  it('should render slots correctly', async () => {
    const { findByTestId } = renderBaseCard({
      fileName: 'Lorem Ipsum',
      slots: {
        top: '<img data-testid="top-element" />',
        details: '<button data-testid="details-element" />',
        bottom: '<input data-testid="bottom-element" />',
      },
    })

    await nextTick()

    await findByTestId('top-element')
    await findByTestId('details-element')
    await findByTestId('bottom-element')
  })
})
