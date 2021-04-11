import { reactive, readonly } from 'vue'

import { IUserHook, IUserState } from './types'
import { getFromStorage, saveInStorage } from '@/services/storage'
import { generateUniqueId } from '@/utilities/generators'

const state = reactive<IUserState>({
  id: '',
})

export function useUser(): IUserHook {
  return { user: readonly(state), initializeUser }
}

function setUserId(targetId: string) {
  state.id = targetId
  saveInStorage('user', state)
}

function initializeUser() {
  const user = getFromStorage('user') as IUserState | null

  if (user) setUserId(user.id)
  else setUserId(generateUniqueId())
}
