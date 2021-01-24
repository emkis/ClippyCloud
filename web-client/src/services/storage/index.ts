const storagePrefix = '@clippycloud:'

export function getFromStorage(key: string): any | null {
  const customKey = `${storagePrefix}${key}`

  const isValidData = validateStorageItem(customKey)
  if (!isValidData) return null

  const rawData = localStorage.getItem(customKey) || '{}'
  return JSON.parse(rawData)
}

export function saveInStorage(key: string, data: any): void {
  const customKey = `${storagePrefix}${key}`

  try {
    localStorage.setItem(customKey, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}

function validateStorageItem(key: string): boolean {
  const rawData = localStorage.getItem(key) || ''
  const isItemParsable = isValidJSON(rawData)

  if (isItemParsable) return true

  localStorage.removeItem(key)
  return false
}

function isValidJSON(targetText: string): boolean {
  try {
    JSON.parse(targetText)
    return true
  } catch {
    return false
  }
}
