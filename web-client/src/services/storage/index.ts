import { makeCustomKey, validateStorageItem } from './helpers'

export function getFromStorage(key: string): any | null {
  const customKey = makeCustomKey(key)

  const isValidData = validateStorageItem(customKey)
  if (!isValidData) return null

  const rawData = localStorage.getItem(customKey) as string
  return JSON.parse(rawData)
}

export function saveInStorage(key: string, data: any): void {
  const customKey = makeCustomKey(key)
  localStorage.setItem(customKey, JSON.stringify(data))
}

export function removeFromStorage(key: string): void {
  const customKey = makeCustomKey(key)
  localStorage.removeItem(customKey)
}
