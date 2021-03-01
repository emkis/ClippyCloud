<template>
  <div class="FileCardHead" :style="backgroundColor">
    <IconFile :color="iconColor" size="124" />
    <h5>{{ fileExtension }}</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EThemeColors, makeRgba } from '@/services/theme'
import { defaultFileCardProps } from './defaultFileCardProps'

import IconFile from '@/components/Icons/IconFile.vue'

function getRandomColor() {
  const colors = [
    {
      solid: EThemeColors.kournikova,
      rgb: EThemeColors.kournikovaRGB,
    },
    {
      solid: EThemeColors.dodgerBlue,
      rgb: EThemeColors.dodgerBlueRGB,
    },
    {
      solid: EThemeColors.grannySmithApple,
      rgb: EThemeColors.grannySmithAppleRGB,
    },
    {
      solid: EThemeColors.geraldine,
      rgb: EThemeColors.geraldineRGB,
    },
    {
      solid: EThemeColors.heliotrope,
      rgb: EThemeColors.heliotropeRGB,
    },
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}

export default defineComponent({
  name: 'FileCardHead',
  components: { IconFile },
  props: {
    ...defaultFileCardProps,
    isExpired: { type: Boolean, default: false },
  },
  setup(props) {
    const { rgb: colorRgb, solid: solidColor } = getRandomColor()

    const colors = {
      icon: solidColor,
      background: `background: ${makeRgba(colorRgb, 0.25)}`,
    }

    const expiredColors = {
      icon: EThemeColors.white,
      background: `background: ${makeRgba(EThemeColors.whiteRGB, 0.25)}`,
    }

    const targetColor = props.isExpired ? expiredColors : colors

    return {
      iconColor: targetColor.icon,
      backgroundColor: targetColor.background,
    }
  },
})
</script>

<style lang="scss" scoped>
.FileCardHead {
  position: relative;
  display: grid;
  place-content: center;
  padding: rem(25px);
  background: none;

  > h5 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: rem(20px);
    text-transform: uppercase;
  }

  > svg {
    opacity: 0.3;
  }
}
</style>
