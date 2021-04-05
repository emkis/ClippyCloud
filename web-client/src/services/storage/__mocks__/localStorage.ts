const createLocalStorageMock = () => {
  let storage = new Map()

  const clear = jest.fn(() => (storage = new Map()))
  const getItem = jest.fn((key: string) => storage.get(key) || null)
  const setItem = jest.fn((key: string, data: string) => storage.set(key, data))
  const removeItem = jest.fn((key: string) => storage.delete(key))

  return { clear, getItem, setItem, removeItem }
}

export const LocalStorageMock = createLocalStorageMock()

Object.defineProperty(window, 'localStorage', { value: LocalStorageMock })
