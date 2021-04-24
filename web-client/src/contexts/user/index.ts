import { reactive, readonly, toRefs } from 'vue'

import type { UserContext, UserState } from './types'

import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const state = reactive<UserState>({
  id: '',
})

export function useUser(): UserContext {
  return { ...toRefs(readonly(state)) }
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
