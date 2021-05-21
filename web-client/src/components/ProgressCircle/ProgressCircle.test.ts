import { render } from '@testing-library/vue'
import { ProgressCircle } from './index'

function renderProgressCircle() {
  return render(ProgressCircle, {
    props: {
      progressColor: 'blue',
      foregroundColor: 'gray',
    },
  })
}

describe('<ProgressCircle />', () => {
  it('should render with default size in inline style', async () => {
    const { container } = renderProgressCircle()
    const progressCircle = container.children[0]

    expect(progressCircle.getAttribute('style')).toBe('--size: 100px;')
  })

  it('should render with default stroke', async () => {
    renderProgressCircle()
    const [foregroundCircle, backgroundCircle] = document.querySelectorAll('circle')

    expect(foregroundCircle.getAttribute('stroke-width')).toBe('3')
    expect(backgroundCircle.getAttribute('stroke-width')).toBe('3')
  })

  it('should render correct provided colors', async () => {
    renderProgressCircle()
    const [foregroundCircle, backgroundCircle] = document.querySelectorAll('circle')

    expect(foregroundCircle.getAttribute('stroke')).toBe('gray')
    expect(backgroundCircle.getAttribute('stroke')).toBe('blue')
  })
})
