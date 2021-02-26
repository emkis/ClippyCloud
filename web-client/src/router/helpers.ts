import { RouteLocationNormalized } from 'vue-router'
import { usePageTitle } from '@/hooks/page-title'

export function handlePageTitle(route: RouteLocationNormalized) {
  const { setTitle, resetTitle } = usePageTitle()
  const routeTitleExists = route.meta?.title

  if (routeTitleExists) setTitle(String(route.meta.title))
  else resetTitle()
}
