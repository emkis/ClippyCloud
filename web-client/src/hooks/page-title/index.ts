import { environment } from '@/configs/environment'

interface IOptions {
  appendTitle?: boolean
}

export function usePageTitle() {
  const { appTitle } = environment

  function setTitle(pageName: string, { appendTitle = true }: IOptions = {}) {
    if (appendTitle) {
      document.title = `${pageName} | ${appTitle}`
    } else {
      document.title = pageName
    }
  }

  const resetTitle = () => setTitle(appTitle, { appendTitle: false })

  return { setTitle, resetTitle }
}
