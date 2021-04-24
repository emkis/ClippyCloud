import type { ToRefs } from 'vue'

export type UserContext = Readonly<UserStateRef>

export type UserStateRef = ToRefs<UserState>

export interface UserState {
  id: string
}
