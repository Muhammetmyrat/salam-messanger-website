import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'AuthorizationPage'

export const route: RouteRecordRaw = {
	name: routeName,
	path: '/authorization',
	meta: { layout: 'empty' },
	component: () => import('@/pages/authorization')
}
