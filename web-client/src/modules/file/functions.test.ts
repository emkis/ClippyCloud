import { getCurrentISODate, getReadableSize } from './functions'

describe('File Functions', () => {
  beforeEach(jest.clearAllMocks)

  describe('getCurrentISODate()', () => {
    it('should return a string', () => {
      expect(typeof getCurrentISODate()).toBe('string')
    })

    it('should have expected length', () => {
      expect(getCurrentISODate()).toHaveLength(24)
    })
  })

  describe('getReadableSize()', () => {
    it('should return a string', () => {
      expect(typeof getReadableSize(3)).toBe('string')
    })

    it('should return expected readable sizes', () => {
      expect(getReadableSize(300)).toBe('300 B')
      expect(getReadableSize(935)).toBe('935 B')
      expect(getReadableSize(63645)).toBe('62 KB')
      expect(getReadableSize(98537534)).toBe('94 MB')
      expect(getReadableSize(684098045345)).toBe('637 GB')
    })
  })
})
