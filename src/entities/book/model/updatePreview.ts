import { useBookStore } from './stores'

export function openBookPreview() {
  const store = useBookStore()

  store.isShowBookPreview = true
}

export function closeBookPreview() {
  const store = useBookStore()

  store.isShowBookPreview = false
}
