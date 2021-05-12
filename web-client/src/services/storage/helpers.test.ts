import { isValidJSON, makeCustomKey, validateStorageItem, STORAGE_PREFIX } from './helpers'
import { LocalStorageMock } from './__mocks__/localStorage'

describe('isValidJSON()', () => {
  const invalidJSONList = ['', 'lorem ipsum', '{', `{"name": "emkis",}`]

  invalidJSONList.forEach((json) => {
    test(`"${json}" should return "false"`, () => {
      expect(isValidJSON(json)).toBe(false)
    })
  })

  const validJSONList = [
    `{ "name": "emkis" }`,
    `{ "age": 22 }`,
    `{ "name": "emkis", "email": null }`,
  ]

  validJSONList.forEach((json) => {
    test(`"${json}" should return "true"`, () => {
      expect(isValidJSON(json)).toBe(true)
    })
  })
})

describe('makeCustomKey()', () => {
  it('should return the storage prefix only', () => {
    const key = makeCustomKey('')
    expect(key).toBe(STORAGE_PREFIX)
  })

  it('should return a the correct customKey', () => {
    const customkey1 = makeCustomKey('user')
    const customkey2 = makeCustomKey('LoremIpsum')

    expect(customkey1).toBe(`${STORAGE_PREFIX}user`)
    expect(customkey2).toBe(`${STORAGE_PREFIX}LoremIpsum`)
  })
})

describe('validateStorageItem()', () => {
  beforeEach(jest.clearAllMocks)

  it('should return "false" if item in storage is not JSON parsable', () => {
    const itemResponse = validateStorageItem('auth')
    expect(itemResponse).toBe(false)
  })

  it('should remove item from storage, if is an invalid JSON', () => {
    const itemResponse = validateStorageItem('user')
    expect(LocalStorageMock.removeItem).toHaveBeenNthCalledWith(1, 'user')
    expect(itemResponse).toBe(false)
  })

  it('should return "true" if item exists in storage and is a valid JSON', () => {
    LocalStorageMock.setItem('username', '{ "name": "emkis" }')

    const itemResponse = validateStorageItem('username')
    expect(itemResponse).toBe(true)
  })
})
