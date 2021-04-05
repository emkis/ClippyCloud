import { EThemeColors, makeRgba } from '@/services/theme'

interface IHeadColors {
  icon: string
  background: string
}

interface IRandomColor {
  solid: EThemeColors
  rgb: EThemeColors
}

export function useHeadColors(isExpired: boolean): IHeadColors {
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

function makeBackground(color: string) {
  return `background: ${makeRgba(color, 0.25)}`
}

function getRandomColor(): IRandomColor {
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
