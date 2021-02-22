import { environment } from '@/configs/environment'

interface IOptions {
  appendTitle?: boolean
}

export function usePageTitle({ appendTitle = true }: IOptions = {}) {
  function setTitle(pageName: string) {
    const { appTitle } = environment

    if (appendTitle) {
      document.title = `${pageName} | ${appTitle}`
    } else {
      document.title = pageName
    }
  }

  return { setTitle }
}
