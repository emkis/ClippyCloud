import { useFile } from '@/contexts/file'

import type { DroppedFiles, FileRejection } from '@/modules/file'

const { uploadFile, rejectFile } = useFile()

export function useDropFiles() {
  return { handleDropFiles }
}

function handleDropFiles(files: DroppedFiles) {
  const { acceptedFiles, rejectedFiles } = files

  handleUpload(acceptedFiles)
  handleRejected(rejectedFiles)
}

function handleUpload(files: File[]) {
  files.forEach(uploadFile)
}

function handleRejected(files: FileRejection[]) {
  files.forEach(({ file }: FileRejection) => rejectFile(file))
}
