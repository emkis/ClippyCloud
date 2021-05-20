import filesize from 'filesize'
import { formatDistanceToNow, addMinutes, isPast } from 'date-fns'

import type { CustomFile } from './types'

import { generateUniqueId } from '@/utilities/generators'
import { getFileExtension } from '@/utilities/strings'

export function isFileExpired(fileCreationDate: string) {
  const creationDate = new Date(fileCreationDate)
  const expireDate = addMinutes(creationDate, 30)

  return isPast(expireDate)
}

export function getTimeToExpireFile(fileCreationDate: string) {
  const creationDate = new Date(fileCreationDate)
  const expireDate = addMinutes(creationDate, 30)
  const timeToExpire = formatDistanceToNow(expireDate)

  return timeToExpire
}

export function getCurrentISODate() {
  return new Date().toISOString()
}

export function parseFile(file: File): CustomFile {
  return {
    rawFile: file,
    id: generateUniqueId(),
    name: file.name,
    extension: getFileExtension(file.name),
    size: file.size,
    progress: 0,
    url: null,
    createdAt: getCurrentISODate(),
    isSettled: false,
    isUploaded: false,
    isUploadFailed: false,
    isUploadCanceled: false,
    isBiggerThanSizeLimit: false,
  }
}

export function getReadableSize(size: number) {
  const sizeFormatter = filesize.partial({ round: 0 })
  return sizeFormatter(size)
}
