import { isPast, addMinutes } from 'date-fns'
import FileModel from '../models/File'

function validate(file) {
  if (!file) {
    throw new Error('You need to provide a file')
  }
}

function isFileExpired(file) {
  validate(file)

  const creationDate = new Date(file.createdAt)
  const expireDate = addMinutes(creationDate, 30)

  return isPast(expireDate)
}

async function deleteFile(file) {
  validate(file)

  const { _id } = file
  await FileModel.deleteOne({ _id })
}

async function getExpiredFiles() {
  const files = await FileModel.find()
  const expiredFiles = files.filter(isFileExpired)
  return expiredFiles
}

export async function deleteAllExpiredFiles() {
  const expiredFiles = await getExpiredFiles()
  expiredFiles.forEach(deleteFile)
}
