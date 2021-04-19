import { generateUniqueId } from '../generators'

describe('generateUniqueId()', () => {
  it('should create different IDs in a sequence', () => {
    const key1 = generateUniqueId()
    const key2 = generateUniqueId()

    expect(key1).not.toBe(key2)
  })

  it('should return a string', () => {
    const result = generateUniqueId()
    expect(typeof result).toBe('string')
  })
})
