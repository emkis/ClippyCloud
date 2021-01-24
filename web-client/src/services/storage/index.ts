function isValidJSON(targetText: string): boolean {
  try {
    JSON.parse(targetText)
    return true
  } catch {
    return false
  }
}

function validateStorageItem(key: string): boolean {
  const rawData = localStorage.getItem(key) || ''
  const isItemParsable = isValidJSON(rawData)

  if (isItemParsable) return true

  localStorage.removeItem(key)
  return false
}

export function getFromStorage(key: string): any | null {
  const isValidData = validateStorageItem(key)
  if (!isValidData) return null

  const rawData = localStorage.getItem(key) || ''
  const dataExists = Boolean(rawData)

  if (dataExists) return JSON.parse(rawData)
}

export function saveInStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}
