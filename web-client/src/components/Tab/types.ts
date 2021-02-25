export interface ITabItemProps {
  label: string
  items: number
}

export const enum ETabComponents {
  Tab = 'Tab',
  TabItem = 'TabItem',
  TabLayout = 'TabLayout',
}

export interface ITabHookState {
  activeTabName: string
}
