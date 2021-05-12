import { getReadableSize } from '@/modules/file'

export const FILE_MAX_SIZE = 104857600 // 100 MB

export const FILE_MAX_SIZE_FORMATTED = getReadableSize(FILE_MAX_SIZE).toLowerCase().replace(' ', '')
