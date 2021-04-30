import { useAppScroll } from './index'

describe('useAppScroll()', () => {
  beforeEach(jest.clearAllMocks)

  it.skip('should return expected properties', () => {
    expect(useAppScroll()).toEqual({
      toggleScroll: expect.any(Function),
      enableAppScroll: expect.any(Function),
      disableAppScroll: expect.any(Function),
    })
  })

  describe('toggleScroll()', () => {
    it.skip('should add overflow to prevent scroll when called', async () => {
      const { toggleScroll } = useAppScroll()

      const beforeCallDocumentStyles = document.body.style.overflow
      toggleScroll()
      const afterCallDocumentStyles = document.body.style.overflow

      expect(beforeCallDocumentStyles).toBe('')
      expect(afterCallDocumentStyles).toBe('hidden')
    })

    it.skip('should remove overflow style if exists', () => {
      const { toggleScroll } = useAppScroll()

      toggleScroll()

      const pageStyles = document.body.style
      expect(pageStyles.overflow).toBe('')
    })

    it.skip('should toggle overflow style when called twice', () => {
      const { toggleScroll } = useAppScroll()

      const beforeCallDocumentStyles = document.body.style.overflow
      toggleScroll()
      toggleScroll()
      const afterCallDocumentStyles = document.body.style.overflow

      expect(beforeCallDocumentStyles).toBe('')
      expect(afterCallDocumentStyles).toBe('hidden')
    })
  })
})
