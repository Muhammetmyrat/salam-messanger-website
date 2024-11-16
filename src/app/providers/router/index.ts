import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware'

export { pages as AppPages } from './pages'

import { ProfileModel } from '@/entities/profile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)
router.beforeEach(async (to, from, next) => {
  from
  next()
  return
  if (to.path === '/authorization') {
    next()
    return
  }
  const profileStore = ProfileModel.useProfileStore()

  if (!profileStore.isAuth) {
    await profileStore.getMyProfile()
  }

  if (profileStore.isAuth) {
    next()
  } else {
    next('/authorization')
    return
  }
})

export { router }
