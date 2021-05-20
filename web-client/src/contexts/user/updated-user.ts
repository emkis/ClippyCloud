import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import type { UserContextHook, UserState, UploadedFile } from './types'

import { getFromStorage, removeFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const id = ref('')
const uploadedFiles = ref<UploadedFile[]>([])

watch([id, uploadedFiles], () => {
  syncUserStateWithStorage()
})

export function useUser(): UserContextHook {
  /**
   * This is necessary to force a re-render of all components that uses this context,
   * that way it will always be shown if the file is expired or not based on its creation time
   */
  let reRenderInterval: number

  onMounted(() => {
    reRenderInterval = setInterval(updateFilesId, 6000)
  })

  onBeforeUnmount(() => {
    clearInterval(reRenderInterval)
  })

  return { id, uploadedFiles, addUploadedFile }
}

export function initializeUser() {
  const user = getFromStorage<UserState>('user')
  const storeUser = () => setUserId(generateUniqueId())

  if (!user) storeUser()
  else {
    const isValidData = validateUser(user)
    isValidData ? setUserState(user) : storeUser()
  }
}

function validateUser(userData: UserState): boolean {
  const { id, uploadedFiles } = userData

  if (id && uploadedFiles) return true
  else {
    removeFromStorage('user')
    return false
  }
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
  saveInStorage<UserState>('user', {
    id: id.value,
    uploadedFiles: uploadedFiles.value,
  })
}

function updateFilesId() {
  uploadedFiles.value.forEach((file) => (file.id = generateUniqueId()))
}
