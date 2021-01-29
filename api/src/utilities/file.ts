import { isPast, addMinutes } from 'date-fns'
import FileModel, { IFile } from '../models/File'

function isFileExpired (file: IFile) {
  const creationDate = new Date(file.createdAt)
  const expireDate = addMinutes(creationDate, 30)

  return isPast(expireDate)
}

async function deleteFile (file: IFile) {
  await FileModel.deleteOne({ _id: file._id })
}

async function getExpiredFiles () {
  const files = await FileModel.find()
  const expiredFiles = files.filter(isFileExpired)
  return expiredFiles
}

export async function deleteAllExpiredFiles () {
  const expiredFiles = await getExpiredFiles()
  expiredFiles.forEach(deleteFile)
}
