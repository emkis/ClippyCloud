import { getPercentage } from './numbers'

describe('getPercentage()', () => {
  it('should return expected percentages', () => {
    expect(getPercentage(0, 100)).toBe(0)
    expect(getPercentage(200, 400)).toBe(50)
    expect(getPercentage(1864, 7234)).toBe(25.767210395355267)
    expect(getPercentage(93, 384)).toBe(24.21875)
  })

  it('should return a number', () => {
    const result = getPercentage(59, 100)
    expect(typeof result).toBe('number')
  })
})
