import filesize from 'filesize'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import addMinutes from 'date-fns/addMinutes'
import isPast from 'date-fns/isPast'

import type { CustomFile } from './types'

import { generateUniqueId } from '@/utilities/generators'

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

export function parseFile(file: File): CustomFile {
  return {
    rawFile: file,
    id: generateUniqueId(),
    name: file.name,
    size: file.size,
    progress: 0,
    url: null,
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
