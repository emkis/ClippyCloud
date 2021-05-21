import { nextTick } from 'vue'
import { useAppScroll } from './index'

describe('useAppScroll()', () => {
  it('should return expected properties', () => {
    expect(useAppScroll()).toEqual({
      toggleScroll: expect.any(Function),
      enableAppScroll: expect.any(Function),
      disableAppScroll: expect.any(Function),
    })
  })

  describe('toggleScroll()', () => {
    it('should toggle overflow style when called', async () => {
      const { toggleScroll } = useAppScroll()

      const initialStyle = document.body.style.overflow
      toggleScroll()
      await nextTick()
      const afterFirstCallStyle = document.body.style.overflow
      toggleScroll()
      await nextTick()
      const lastCallStyle = document.body.style.overflow

      expect(initialStyle).toBe('')
      expect(afterFirstCallStyle).toBe('hidden')
      expect(lastCallStyle).toBe('')
    })
  })

  describe('enableAppScroll()', () => {
    it('should remove overflow styles when called', async () => {
      document.body.style.overflow = 'hidden'

      const initialStyle = document.body.style.overflow
      const { enableAppScroll } = useAppScroll()

      enableAppScroll()
      await nextTick()

      const finalStyle = document.body.style.overflow

      expect(initialStyle).toBe('hidden')
      expect(finalStyle).toBe('')
    })
  })

  describe('disableAppScroll()', () => {
    it('should add overflow styles when called', async () => {
      const initialStyle = document.body.style.overflow
      const { disableAppScroll } = useAppScroll()

      disableAppScroll()
      await nextTick()

      const finalStyle = document.body.style.overflow

      expect(finalStyle).toBe('hidden')
      expect(initialStyle).toBe('')
    })
  })
})
