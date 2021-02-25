import { reactive, readonly } from 'vue'
import type { ITabHookState } from '../types'

const state = reactive<ITabHookState>({
  activeTabName: '',
})

export function useTab() {
  return { tab: readonly(state), setActiveTab }
}

export function setActiveTab(tabName: string) {
  state.activeTabName = tabName
}
