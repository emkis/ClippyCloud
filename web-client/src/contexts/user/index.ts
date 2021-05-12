import { ref, watch } from 'vue'

import type { UserContextHook, UserState } from './types'

import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const id = ref('')

initializeUser()
watch([id], syncUserStateWithStorage)

export function useUser(): UserContextHook {
  return { id }
}

function initializeUser() {
  const user = getFromStorage<UserState>('user')

  if (!user) setUserId(generateUniqueId())
  else setUserId(user.id)
}

function setUserId(targetId: string) {
  id.value = targetId
}

function syncUserStateWithStorage() {
  saveInStorage<UserState>('user', { id: id.value })
}
