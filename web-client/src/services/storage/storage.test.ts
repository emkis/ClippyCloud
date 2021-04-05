import { LocalStorageMock } from './__mocks__/localStorage'
import { getFromStorage, removeFromStorage, saveInStorage } from './index'
import { makeCustomKey } from './helpers'

describe('getFromStorage()', () => {
  it('should return "null" if item no exists in storage', () => {
    expect(getFromStorage('user')).toBeNull()
  })

  it('should return the correct data when called', () => {
    const customKey = makeCustomKey('user')
    LocalStorageMock.setItem(customKey, `{ "name": "emkis" }`)

    const user = getFromStorage('user')

    expect(user).toEqual({ name: 'emkis' })
    expect(getFromStorage('user')).not.toBeNull()
  })
})

describe('removeFromStorage()', () => {
  beforeEach(jest.clearAllMocks)

  it('should remove expected item', () => {
    const customKey = makeCustomKey('email')
    LocalStorageMock.setItem(customKey, `{ "email": "lipsum@email.com" }`)

    removeFromStorage('email')
    const valueFromStorage = getFromStorage('email')

    expect(LocalStorageMock.removeItem).toHaveBeenNthCalledWith(1, customKey)
    expect(valueFromStorage).toBeNull()
  })
})

describe('saveInStorage()', () => {
  it('should save the data in storage correctly', () => {
    saveInStorage('profile', { age: 26, name: 'anna' })

    const dataInStorage = getFromStorage('profile')

    expect(dataInStorage).not.toBeNull()
    expect(dataInStorage).toEqual({ age: 26, name: 'anna' })
  })
})
