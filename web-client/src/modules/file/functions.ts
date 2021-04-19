import type { CustomFile } from './types'

import { generateUniqueId } from '@/utilities/generators'

export function parseFile(file: File): CustomFile {
  return {
    file,
    id: generateUniqueId(),
    name: file.name,
    size: file.size,
    progress: 0,
    hasUploadError: false,
    hasInvalidSize: false,
    url: null,
  }
}
