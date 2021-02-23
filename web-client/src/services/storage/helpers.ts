export const STORAGE_PREFIX = '@clippycloud:'

export function isValidJSON(stringToTest: string): boolean {
  try {
    JSON.parse(stringToTest)
    return true
  } catch {
    return false
  }
}

export function validateStorageItem(key: string): boolean {
  const rawData = localStorage.getItem(key) || ''
  const isItemParsable = isValidJSON(rawData)

  if (isItemParsable) return true

  localStorage.removeItem(key)
  return false
}

export function makeCustomKey(key: string): string {
  return `${STORAGE_PREFIX}${key}`
}
