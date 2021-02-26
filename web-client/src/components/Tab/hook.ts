import { ref } from 'vue'

export function useTabs(activeTabName = '') {
  const activeTab = ref(activeTabName)

  return { activeTab, setActiveTab }

  function setActiveTab(targetTabName: string) {
    activeTab.value = targetTabName
  }
}
