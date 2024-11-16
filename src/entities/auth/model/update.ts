import { useAuthStore } from './stores'

export function updateStep(newStep: number) {
  const store = useAuthStore()

  store.authStep = newStep
}
