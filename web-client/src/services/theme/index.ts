export function makeRgba(colorName: string, alpha: number) {
  return `rgba(${colorName}, ${alpha})`
}

export enum EThemeColors {
  shark = 'var(--color-shark)',
  charade = 'var(--color-charade)',
  brightGray = 'var(--color-bright-gray)',
  cadetBlue = 'var(--color-cadet-blue)',
  shuttleGray = 'var(--color-shuttle-gray)',
  white = 'var(--color-white)',
  whiteRGB = 'var(--color-white-rgb)',
  kournikova = 'var(--color-kournikova)',
  kournikovaRGB = 'var(--color-kournikova-rgb)',
  dodgerBlue = 'var(--color-dodger-blue)',
  dodgerBlueRGB = 'var(--color-dodger-blue-rgb)',
  grannySmithApple = 'var(--color-granny-smith-apple)',
  grannySmithAppleRGB = 'var(--color-granny-smith-apple-rgb)',
  geraldine = 'var(--color-geraldine)',
  geraldineRGB = 'var(--color-geraldine-rgb)',
  heliotrope = 'var(--color-heliotrope)',
  heliotropeRGB = 'var(--color-heliotrope-rgb)',
}

export enum EThemeConcepts {
  primaryColor = 'var(--color-dodger-blue)',
  primaryColorRGB = 'var(--color-dodger-blue-rgb)',

  overBackground = 'var(--color-charade)',
  overBackgroundElement = 'var(--color-bright-gray)',

  textPrimary = 'var(--color-white)',
  textSecondary = 'var(--color-cadet-blue)',
  textFaded = 'var(--color-shuttle-gray)',

  successColor = 'var(--color-granny-smith-apple)',
  attentionColor = 'var(--color-kournikova)',
  errorColor = 'var(--color-geraldine)',
}
