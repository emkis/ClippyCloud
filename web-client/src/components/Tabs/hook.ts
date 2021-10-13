import { readonly, ref } from 'vue'

export function useTabs(activeTabName = '') {
  const activeTab = ref(activeTabName)

  return {
    activeTab: readonly(activeTab),
    setActiveTab,
  }

  function setActiveTab(targetTabName: string) {
    activeTab.value = targetTabName
  }
}
