import axios from 'axios'
import { ref } from 'vue'

import { useUser } from '@/contexts/user'
import { CustomFile, parseFile } from '@/modules/file'
import { FileUpload } from '@/services/api/file-upload'

import type { FileContextHook } from './types'

const files = ref<CustomFile[]>([])

export function useFile(): FileContextHook {
  return {
    files,
    uploadFile,
    rejectFile,
    removeFileById,
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

async function uploadFile(file: File) {
  const user = useUser()

  const parsedFile = parseFile(file)
  addFileToState(parsedFile)

  const requestSource = createRequestSource()

  const formData = new FormData()
  formData.append('file', parsedFile.rawFile, parsedFile.name)

  const updateFileProgress = (progress: number) => {
    updateFileState(parsedFile.id, { progress })
  }

  updateFileState(parsedFile.id, { requestSource })

  try {
    const fileResponse = await FileUpload.upload({
      uploadData: { userId: user.id.value, formData },
      onProgress: updateFileProgress,
      cancelToken: requestSource.token,
    })

    updateFileState(parsedFile.id, {
      isUploaded: true,
      url: fileResponse.data.url,
    })
  } catch (error) {
    if (axios.isCancel(error)) {
      updateFileState(parsedFile.id, { isUploadCanceled: true })
    } else {
      updateFileState(parsedFile.id, { isUploadFailed: true })
    }
  } finally {
    updateFileState(parsedFile.id, { isSettled: true })
  }
}
