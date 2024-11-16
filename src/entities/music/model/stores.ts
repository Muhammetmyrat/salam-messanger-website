import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { api } from '../api'

interface Music {
  type: string
  data: any[]
}

interface IMusicStore {
  isShowArtistPreview: Ref<boolean>
  isShowPlayerPreview: Ref<boolean>
  musicsMain: Ref<Music[]>
  musicsMainTop: ComputedRef<Music | {}>
  closeArtistPreview: () => void
  openArtistPreview: () => void
  closePlayerPreview: () => void
  openPlayerPreview: () => void
  fetchMusicMain: () => Promise<boolean>
}

const NAMESPACE = 'music'

export const useMusicStore = defineStore(NAMESPACE, (): IMusicStore => {
  // State
  const isShowArtistPreview = ref(false)
  const isShowPlayerPreview = ref(false)
  const musicsMain = ref<Music[]>([])

  // Getters
  const musicsMainTop = computed(() =>
    musicsMain.value.find((music) => music.type === 'top') || {}
  )

  // Actions
  const closeArtistPreview = () => (isShowArtistPreview.value = false)
  const openArtistPreview = () => (isShowArtistPreview.value = true)
  const closePlayerPreview = () => (isShowPlayerPreview.value = false)
  const openPlayerPreview = () => (isShowPlayerPreview.value = true)

  const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
    const chunks = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize))
    }
    return chunks
  }

  const updateMusicMain = (musicData: Music[]) => {
    musicsMain.value = musicData.map((music) => {
      if (music.type === 'top') {
        const chunkedData = chunkArray(music.data, 5)

        return { ...music, data: chunkedData.slice(0, 2) }  
      }
      return music
    })
  }

  const fetchMusicMain = async (): Promise<boolean> => {
    try {
      const { data } = await api.getMusic()
      if (data.error) return false
      updateMusicMain(data.blocks)
      return true
    } catch (error) {
      console.error('Failed to fetch music data:', error)
      return false
    }
  }

  const fetchMusicBlock = async (id): Promise<boolean> => {
    try {
      const { data } = await api.getMusicBlock(id)
      if (data.error) return false
      // updateMusicMain(data.blocks)
      return true
    } catch (error) {
      console.error('Failed to fetch music block data:', error)
      return false
    }
  }

  // Public API
  return {
    isShowArtistPreview,
    isShowPlayerPreview,
    musicsMain,
    musicsMainTop,
    closeArtistPreview,
    openArtistPreview,
    closePlayerPreview,
    openPlayerPreview,
    fetchMusicMain,
  }
})
