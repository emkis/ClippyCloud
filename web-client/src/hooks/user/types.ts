export interface UserHook {
  user: Readonly<UserState>
}

export interface UserState {
  id: string
}
