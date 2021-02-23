import { reactive, readonly } from 'vue'
import { v4 as uuid } from 'uuid'

import { IUserHook, IUserState } from './types'
import { getFromStorage, saveInStorage } from '@/services/storage'

const state = reactive<IUserState>({
  id: '',
})

export function useUser(): IUserHook {
  return { user: readonly(state) }
}

function generateId(): string {
  return uuid()
}

export function setUserId(targetId: string): void {
  state.id = targetId
  saveInStorage('user', state)
}

export async function initializeUser(): Promise<void> {
  const user: IUserState = getFromStorage('user')

  if (user) setUserId(user.id)
  else setUserId(generateId())
}
