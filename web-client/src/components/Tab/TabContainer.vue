<template>
  <div class="TabContainer">
    <nav class="TabContainer__tabs">
      <TabItem
        :name="tab.props.name"
        :key="tabIndex"
        v-for="(tab, tabIndex) in tabs"
        @onSelected="handleTabChange"
      />
    </nav>

    <div class="TabContainer__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ITabItemProps, ETabComponents } from './types'

import { defineComponent, onBeforeMount, ref } from 'vue'
import { useTab } from './hook'

import TabItem from './TabItem.vue'

export default defineComponent({
  name: 'TabContainer',
  components: { TabItem },
  setup(props, { slots }) {
    const tabs = ref<ITabItemProps[]>([])
    const { setActiveTab } = useTab()

    onBeforeMount(getTabChildren)

    function handleTabChange(targetTabName: string) {
      setActiveTab(targetTabName)
    }

    function getTabChildren() {
      if (!slots.default) return

      const childrenProps = slots
        .default()
        .filter(
          (child: any) => child.type!.name! === ETabComponents.TabLayout
        ) as any[]

      tabs.value = childrenProps
    }

    return { tabs, handleTabChange }
  },
})
</script>

<style lang="scss" scoped>
.TabContainer {
  width: 100%;

  &__tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius-s;
    overflow: auto;
  }

  &__content {
    margin-top: rem(24px);
  }
}
</style>
