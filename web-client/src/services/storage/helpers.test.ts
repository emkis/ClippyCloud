import { STORAGE_PREFIX } from './index'
import { isValidJSON, makeCustomKey, validateStorageItem } from './helpers'
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
  it('should return only the storage prefix', () => {
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
  it('should return "false" if item in storage is not JSON parsable', () => {
    const itemResponse = validateStorageItem('auth')
    expect(itemResponse).toBe(false)
  })

  it('should return remove the storage item if is invalid or not exists', () => {
    const itemResponse = validateStorageItem('user')
    expect(itemResponse).toBe(false)
  })

  it('should return "true" if item in storage is JSON parsable', () => {
    LocalStorageMock.setItem('username', '{ "name": "emkis" }')

    const itemResponse = validateStorageItem('username')
    expect(itemResponse).toBe(true)
  })
})
