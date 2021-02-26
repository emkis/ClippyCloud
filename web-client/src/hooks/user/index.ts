import { reactive, readonly } from 'vue'
import { v4 as uuid } from 'uuid'

import { IUserHook, IUserState } from './types'
import { getFromStorage, saveInStorage } from '@/services/storage'

const state = reactive<IUserState>({
  id: '',
})

export function useUser(): IUserHook {
  return { user: readonly(state), initializeUser }
}

function generateId(): string {
  return uuid()
}

function setUserId(targetId: string): void {
  state.id = targetId
  saveInStorage('user', state)
}

async function initializeUser(): Promise<void> {
  const user: IUserState = getFromStorage('user')

  if (user) setUserId(user.id)
  else setUserId(generateId())
}
