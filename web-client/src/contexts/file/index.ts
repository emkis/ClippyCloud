import axios from 'axios'
import { ref } from 'vue'

import { useUser } from '@/contexts/user'
import { CustomFile, parseFile } from '@/modules/file'
import { FileUpload } from '@/services/api/file-upload'

import type { FileContextHook } from './types'

const user = useUser()
const files = ref<CustomFile[]>([])

export function useFile(): FileContextHook {
  return {
    files,
    uploadFile,
    rejectFile,
    removeFileById,
    retryUploadFileById,
    cancelFileUploadById,
  }
}

function getFileById(targetFileId: string): CustomFile {
  const targetFile = files.value.find(matchedFileId)

  if (!targetFile) {
    throw new Error('FileContext: `fileId` not found in state')
  }

  return targetFile

  function matchedFileId(file: CustomFile) {
    const isIdMatched = Boolean(file.id === targetFileId)
    if (isIdMatched) return file
  }
}

function removeFileById(fileId: string) {
  const targetFile = getFileById(fileId)
  const idToRemove = (file: CustomFile) => file.id !== targetFile.id
  const filteredFiles = files.value.filter(idToRemove)

  files.value = filteredFiles
}

function addFileToState(file: CustomFile) {
  files.value = [...files.value, file]
}

function updateFileState(fileId: string, stateProps: Partial<CustomFile>) {
  const file = getFileById(fileId)

  Object.assign(file, stateProps)
}

function createRequestSource() {
  return axios.CancelToken.source()
}

function cancelFileUploadById(fileId: string) {
  const file = getFileById(fileId)
  file.requestSource?.cancel()
}

function rejectFile(file: File) {
  const parsedFile = parseFile(file)

  parsedFile.isBiggerThanSizeLimit = true
  parsedFile.isSettled = true

  addFileToState(parsedFile)
}

function resetFileState(fileId: string) {
  updateFileState(fileId, {
    isSettled: false,
    isUploadCanceled: false,
    isUploadFailed: false,
    progress: 0,
    requestSource: undefined,
  })
}

function uploadFile(file: File) {
  const parsedFile = parseFile(file)

  addFileToState(parsedFile)
  sendFileToServer(parsedFile)
}

function retryUploadFileById(fileId: string) {
  const file = getFileById(fileId)
  sendFileToServer(file, true)
}

async function sendFileToServer(file: CustomFile, needReset = false) {
  if (needReset) resetFileState(file.id)

  const requestSource = createRequestSource()

  const formData = new FormData()
  formData.append('file', file.rawFile, file.name)

  const updateFileProgress = (progress: number) => {
    updateFileState(file.id, { progress, requestSource })
  }

  try {
    const fileResponse = await FileUpload.upload({
      uploadData: { userId: user.id.value, formData },
      onProgress: updateFileProgress,
      cancelToken: requestSource.token,
    })

    updateFileState(file.id, { isUploaded: true, url: fileResponse.data.url })
  } catch (error) {
    if (axios.isCancel(error)) {
      updateFileState(file.id, { isUploadCanceled: true })
    } else {
      updateFileState(file.id, { isUploadFailed: true })
    }
  } finally {
    updateFileState(file.id, { isSettled: true })
  }
}
