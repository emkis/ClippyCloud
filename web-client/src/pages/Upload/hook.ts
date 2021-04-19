import { reactive } from 'vue'

import type { CustomFile, DroppedFiles, FileRejection } from '@/modules/file'

import { FileUpload } from '@/services/api/file-upload'
import { parseFile } from '@/modules/file'
import { useUser } from '@/hooks/user'

export function useFileUpload() {
  const { user } = useUser()

  const files = reactive<CustomFile[]>([])

  return { files, handleDropFiles }

  function handleDropFiles(files: DroppedFiles) {
    const { acceptedFiles, rejectedFiles } = files

    handleUpload(acceptedFiles)
    handleRejected(rejectedFiles)
  }

  function handleRejected(rejectedFiles: FileRejection[]) {
    const parsedRejectedFiles = rejectedFiles.map(({ file }) => {
      const parsedFile = parseFile(file)
      parsedFile.hasInvalidSize = true

      return parsedFile
    })

    addParsedFilesToState(parsedRejectedFiles)
  }

  function handleUpload(filesToUpload: File[]) {
    const parsedFiles = filesToUpload.map(parseFile)

    addParsedFilesToState(parsedFiles)
    parsedFiles.forEach(processUpload)
  }

  function updateFileInState(fileId: string, data: Partial<CustomFile>) {
    const targetFile = files.find((file) => file.id === fileId)
    Object.assign(targetFile, data)
  }

  function addParsedFilesToState(parsedFiles: CustomFile[]) {
    parsedFiles.forEach((file) => files.push(file))
  }

  async function processUpload(droppedFile: CustomFile) {
    const data = new FormData()
    data.append('file', droppedFile.file, droppedFile.name)

    const updateFileProgress = (progress: number) => {
      updateFileInState(droppedFile.id, { progress })
    }

    try {
      const fileResponse = await FileUpload.upload(
        { userId: user.id, formData: data },
        updateFileProgress
      )

      updateFileInState(droppedFile.id, { url: fileResponse.data.url })
    } catch (error) {
      updateFileInState(droppedFile.id, { hasUploadError: true })
    }
  }
}
