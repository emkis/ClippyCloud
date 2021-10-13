import { useTabs } from './hook'

describe('Tab Hook', () => {
  it('should return expected payload when executed', () => {
    const hookPayload = useTabs()

    expect(hookPayload).toEqual({
      activeTab: expect.any(Object),
      setActiveTab: expect.any(Function),
    })
  })

  it('should return expected initial tab name', () => {
    const { activeTab } = useTabs('MOCK_INITIAL_TAB_NAME')

    expect(activeTab.value).toBe('MOCK_INITIAL_TAB_NAME')
  })

  it('should set new active tab name', () => {
    const { activeTab, setActiveTab } = useTabs('FIRST_TAB_NAME')

    expect(activeTab.value).toBe('FIRST_TAB_NAME')
    setActiveTab('SECOND_TAB_NAME')
    expect(activeTab.value).toBe('SECOND_TAB_NAME')
  })
})
