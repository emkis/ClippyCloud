import { makeRgba } from './index'

describe('Theme', () => {
  describe('makeRgba()', () => {
    it('should return correct rgba pattern', () => {
      expect(makeRgba('var(--color)', 0)).toBe('rgba(var(--color), 0)')
      expect(makeRgba('var(--color)', 0.25)).toBe('rgba(var(--color), 0.25)')
      expect(makeRgba('var(--color)', 1)).toBe('rgba(var(--color), 1)')
    })
  })
})
