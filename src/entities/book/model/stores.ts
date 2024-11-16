import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

interface IBookStore {
  isShowBookPreview: Ref<boolean>
}

const namespace = 'book'

export const useBookStore = defineStore(namespace, (): IBookStore => {
  const isShowBookPreview = ref<boolean>(false)

  return {
    isShowBookPreview
  }
})
