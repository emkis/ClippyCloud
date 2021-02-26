export interface IUserHook {
  user: Readonly<IUserState>
  initializeUser: () => void
}

export interface IUserState {
  id: string
}
