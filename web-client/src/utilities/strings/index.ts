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
