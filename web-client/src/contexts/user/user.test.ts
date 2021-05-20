import { useUser } from './index'
import { getFromStorage, saveInStorage } from '@/services/storage'

jest.mock('@/services/storage', () => ({
  getFromStorage: jest.fn(),
  saveInStorage: jest.fn(),
}))

describe('User Context', () => {
  it('should return expected properties from hook', () => {
    expect(useUser()).toEqual(
      expect.objectContaining({
        id: expect.any(Object),
      })
    )
  })

  it('should get user from storage when hook is imported', () => {
    expect(getFromStorage).toHaveBeenNthCalledWith(1, 'user')
  })

  it('should save user in storage after hook is imported', () => {
    expect(saveInStorage).toHaveBeenCalledTimes(1)

    expect(saveInStorage).toHaveBeenCalledWith(
      'user',
      expect.objectContaining({
        id: expect.any(String),
      })
    )
  })
})
