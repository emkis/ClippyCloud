import { validateStorageItem } from './helpers'

export const STORAGE_PREFIX = '@clippycloud:'

export function getFromStorage(key: string): any | null {
  const customKey = `${STORAGE_PREFIX}${key}`

  const isValidData = validateStorageItem(customKey)
  if (!isValidData) return null

  const rawData = localStorage.getItem(customKey) || '{}'
  return JSON.parse(rawData)
}

export function saveInStorage(key: string, data: any): void {
  const customKey = `${STORAGE_PREFIX}${key}`

  try {
    localStorage.setItem(customKey, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}
