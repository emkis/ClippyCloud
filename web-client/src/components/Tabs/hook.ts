import { readonly, ref } from 'vue'

export function useTabs(initialTabName = '') {
  const activeTabName = ref(initialTabName)
  const setActiveTab = (targetName: string) => (activeTabName.value = targetName)

  return {
    activeTabName: readonly(activeTabName),
    setActiveTab,
  }
}
