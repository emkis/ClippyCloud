const createLocalStorageMock = () => {
  let storage = new Map()

  return {
    clear(): void {
      storage = new Map()
    },

    getItem(key: string): any | null {
      return storage.get(key) || null
    },

    setItem(key: string, data: string): void {
      storage.set(key, data)
    },

    removeItem(key: string): void {
      storage.delete(key)
    },
  }
}

export const LocalStorageMock = createLocalStorageMock()

Object.defineProperty(window, 'localStorage', { value: LocalStorageMock })
