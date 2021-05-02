import { ref, readonly } from 'vue'

import type { UserContext, UserState, UploadedFile } from './types'

import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const id = ref('')
const uploadedFiles = ref<UploadedFile[]>([])

export function useUser(): UserContext {
  return {
    id: readonly(id),
    uploadedFiles: readonly(uploadedFiles),
  }
}

function setUserId(targetId: string) {
  id.value = targetId
  saveInStorage('user', { id: id.value })
}

export function initializeUser() {
  const user = getFromStorage('user') as UserState | null

  if (user) setUserId(user.id)
  else setUserId(generateUniqueId())
}
