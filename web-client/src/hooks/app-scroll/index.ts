import { ref, watchEffect } from 'vue'

const isScrollEnabled = ref(isAppScrollEnabled())

export function useAppScroll() {
  watchEffect(() => {
    handleNativeScroll(() => isScrollEnabled.value)
  })

  return { toggleScroll, enableAppScroll, disableAppScroll }
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

function enableAppScroll() {
  isScrollEnabled.value = true
  document.body.style.overflow = ''
}

function disableAppScroll() {
  isScrollEnabled.value = false
  document.body.style.overflow = 'hidden'
}
