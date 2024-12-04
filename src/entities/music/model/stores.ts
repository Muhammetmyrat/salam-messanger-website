import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { api } from '../api'

interface Music {
  type: string
  data: any[]
}

interface IMusicStore {
  isPlayTrack: Ref<boolean>
  isShowArtistPreview: Ref<boolean>
  isShowPlayerPreview: Ref<boolean>
  selectTrackId: Ref<null | number>
  musicsMain: Ref<Music[]>
  musicsMainTop: ComputedRef<any>
  playTrack: (id: number) => void
  pauseTrack: () => void
  closeArtistPreview: () => void
  openArtistPreview: () => void
  togglePlayerPreview: () => void
  fetchMusicMain: () => Promise<boolean>
  trackListening: (payload: {
    duration: number
    musicId: number
  }) => Promise<boolean>
}

const NAMESPACE = 'music'

export const useMusicStore = defineStore(NAMESPACE, (): IMusicStore => {
  // State
  const isPlayTrack = ref(false)
  const isShowArtistPreview = ref(false)
  const isShowPlayerPreview = ref(false)
  const musicsMain = ref<Music[]>([])
  const selectTrackId = ref<null | number>(null)

  // Getters
  const musicsMainTop = computed(() =>
    musicsMain.value.find((music) => music.type === 'top')
  )

  // Actions
  const closeArtistPreview = () => (isShowArtistPreview.value = false)
  const openArtistPreview = () => (isShowArtistPreview.value = true)
  const togglePlayerPreview = () =>
    (isShowPlayerPreview.value = !isShowPlayerPreview.value)
  const playTrack = (id: number) => {
    selectTrackId.value = id
    isPlayTrack.value = true
  }
  const pauseTrack = () => {
    isPlayTrack.value = false
    selectTrackId.value = null
  }

  const updateMusicMain = (musicData: Music[]) => {
    musicsMain.value = musicData
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

  const fetchMusicBlock = async (id: number): Promise<boolean> => {
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

  const trackListening = async (payload: {
    duration: number
    musicId: number
  }): Promise<boolean> => {
    try {
      const { data } = await api.trackListeningCount(payload)
      if (data.error) return false
      return true
    } catch (error) {
      console.error('Failed:', error)
      return false
    }
  }

  // Public API
  return {
    isPlayTrack,
    isShowArtistPreview,
    isShowPlayerPreview,
    musicsMain,
    musicsMainTop,
    playTrack,
    selectTrackId,
    pauseTrack,
    closeArtistPreview,
    openArtistPreview,
    togglePlayerPreview,
    fetchMusicMain,
    trackListening,
  }
})
