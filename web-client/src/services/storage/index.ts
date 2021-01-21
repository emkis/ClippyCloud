function isValidJSON(targetText: string): boolean {
  try {
    JSON.parse(targetText)
    return true
  } catch {
    return false
  }
}

export function getFromStorage(key: string): any {
  const rawData = localStorage.getItem(key) || ''
  const dataExists = !!rawData

  if (dataExists && !isValidJSON(rawData)) {
    return rawData
  }

  return JSON.parse(rawData)
}

export function saveInStorage(key: string, data: any): void {
  const stringifiedData = JSON.stringify(data)
  localStorage.setItem(key, stringifiedData)
}
