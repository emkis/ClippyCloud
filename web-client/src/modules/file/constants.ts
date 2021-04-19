import { getReadableSize } from '@/modules/file'

export const FILE_MAX_SIZE = 104857600 // 100 MB
export const FILE_MAX_SIZE_READABLE = getReadableSize(FILE_MAX_SIZE)
