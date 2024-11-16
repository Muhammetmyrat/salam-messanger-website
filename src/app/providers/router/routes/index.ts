import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'
import { route as authorizationRoute } from './authorization'
import { route as bookRouter } from './book'
import { route as musicRouter } from './music'
import { route as movieRouter } from './movie'
import { route as chatRouter } from './chat'
import { route as profileRoute } from './profile'
import { route as exploreRoute } from './explore'

export const routes: readonly RouteRecordRaw[] = [
  mainRoute,
  authorizationRoute,
  bookRouter,
  musicRouter,
  movieRouter,
  chatRouter,
  profileRoute,
  exploreRoute
] as const
