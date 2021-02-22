import { usePageTitle } from './index'

jest.mock('@/configs/environment', () => ({
  environment: { appTitle: 'Jest App' },
}))

describe('usePageTitle', () => {
  it('should append page title when called', () => {
    const { setTitle } = usePageTitle()

    setTitle('My cool page')
    expect(document.title).toBe('My cool page | Jest App')

    setTitle('Just a page')
    expect(document.title).toBe('Just a page | Jest App')
  })

  it('should not append page title when called', () => {
    const { setTitle } = usePageTitle({ appendTitle: false })

    setTitle('My cool page')
    expect(document.title).toBe('My cool page')

    setTitle('Just a page')
    expect(document.title).toBe('Just a page')
  })
})
