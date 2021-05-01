import mockCopy from 'copy-to-clipboard'
import { truncate, copyToClipboard } from './index'

jest.mock('copy-to-clipboard', () => jest.fn())

describe('truncate()', () => {
  it('should return the same text', () => {
    const text = 'Gorila Roxo'

    expect(truncate(text, 15)).toBe(text)
  })

  it('should return the text truncated and trimmed', () => {
    const text = '777-666   '

    expect(truncate(text, 7)).toBe('777-666...')
  })

  describe('should return truncated text with ellipsis', () => {
    const testCases: [string, string, number][] = [
      ['Lorem ipsum sit dolor amet niat', 'Lorem ipsum sit dolor a...', 23],
      ['Hello There ', 'Hello T...', 7],
      ['Noco Noco Senior', 'Noco...', 5],
      ['a b c', 'a...', 2],
    ]

    testCases.forEach(([originalText, expectedText, limit]) => {
      test(`text: "${originalText}" should be: "${expectedText}"`, () => {
        expect(truncate(originalText, limit)).toBe(expectedText)
      })
    })
  })
})

describe('copyToClipboard()', () => {
  beforeEach(jest.clearAllMocks)

  it('should be called with expected text', () => {
    copyToClipboard('Hello Jest')

    expect(mockCopy).toHaveBeenCalledTimes(1)
    expect(mockCopy).toHaveBeenCalledWith('Hello Jest')
  })
})
