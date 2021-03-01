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

interface HeadColors {
  icon: string
  background: string
}

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

function makeBackground(color: string) {
  return `background: ${makeRgba(color, 0.25)}`
}

function useHeadColors(isExpired: boolean): HeadColors {
  const { rgb: colorRgb, solid: solidColor } = getRandomColor()

  const randomColors = {
    icon: solidColor,
    background: makeBackground(colorRgb),
  }

  const expiredColors = {
    icon: EThemeColors.white,
    background: makeBackground(EThemeColors.whiteRGB),
  }

  return isExpired ? expiredColors : randomColors
}

export default defineComponent({
  name: 'FileCardHead',
  components: { IconFile },
  props: {
    ...defaultFileCardProps,
    isExpired: { type: Boolean, default: false },
  },
  setup(props) {
    const { icon, background } = useHeadColors(props.isExpired)

    return {
      iconColor: icon,
      backgroundColor: background,
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
