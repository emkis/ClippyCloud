import { reactive, readonly } from 'vue'

import type { UserHook, UserState } from './types'

import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const state = reactive<UserState>({
  id: '',
})

export function useUser(): UserHook {
  return { user: readonly(state) }
}

function setUserId(targetId: string) {
  state.id = targetId
  saveInStorage('user', state)
}

export function initializeUser() {
  const user = getFromStorage('user') as UserState | null

  if (user) setUserId(user.id)
  else setUserId(generateUniqueId())
}
