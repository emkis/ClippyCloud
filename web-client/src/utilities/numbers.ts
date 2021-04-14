export function getPercentage(current: number, total: number) {
  return (current * 100) / total
}

export function getRoundPercentage(current: number, total: number) {
  return Math.round((current * 100) / total)
}
