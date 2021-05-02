import { ref, watch } from 'vue'

import type { UserContextHook, UserState, UploadedFile } from './types'

import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const id = ref('')
const uploadedFiles = ref<UploadedFile[]>([])

watch([id, uploadedFiles], () => {
  syncUserStateWithStorage()
})

export function useUser(): UserContextHook {
  return { id, uploadedFiles, addUploadedFile }
}

export function initializeUser() {
  const user = getFromStorage('user') as UserState | null

  if (user) setUserState(user)
  else setUserId(generateUniqueId())
}

function addUploadedFile(file: UploadedFile) {
  uploadedFiles.value = [file, ...uploadedFiles.value]
}

function setUserId(targetId: string) {
  id.value = targetId
}

function setUserState(userData: UserState) {
  id.value = userData.id
  uploadedFiles.value = userData.uploadedFiles
}

function syncUserStateWithStorage() {
  saveInStorage('user', {
    id: id.value,
    uploadedFiles: uploadedFiles.value,
  } as UserState)
}
