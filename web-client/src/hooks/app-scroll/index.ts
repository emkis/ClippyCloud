import { ref, watchEffect } from 'vue'

const isScrollEnabled = ref(isAppScrollEnabled())

export function useAppScroll() {
  watchEffect(() => {
    handleNativeScroll(() => isScrollEnabled.value)
  })

  return { toggleScroll }
}

function isAppScrollEnabled(): boolean {
  const appStyles = document.body.style
  const isScrollPrevented = appStyles.overflow === 'hidden'

  return !isScrollPrevented
}

function handleNativeScroll(isEnabled: () => boolean) {
  if (isEnabled()) enableAppScroll()
  else disableAppScroll()
}

function toggleScroll() {
  isScrollEnabled.value = !isScrollEnabled.value
}

export function enableAppScroll() {
  document.body.style.overflow = ''
}

export function disableAppScroll() {
  document.body.style.overflow = 'hidden'
}
