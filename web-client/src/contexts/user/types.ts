import type { DeepReadonly, Ref } from 'vue'

export interface UserContextHook {
  id: DeepReadonly<Ref<string>>
}

export interface UserState {
  id: string
}
