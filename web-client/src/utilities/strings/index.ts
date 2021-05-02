import copy from 'copy-to-clipboard'

export function truncate(text: string, limit: number) {
  const trimmedText = text.trim()
  const hasMinimumLength = trimmedText.length >= limit

  if (!hasMinimumLength) return text

  const truncatedText = trimmedText.substring(0, limit).trim()
  return `${truncatedText}...`
}

export function copyToClipboard(text: string) {
  copy(text)
}

export function getFileExtension(fileName: string) {
  const extension = fileName.split('.').pop() as string
  const hasNoExtension = extension === fileName

  if (hasNoExtension) return
  else return extension.toLowerCase()
}
