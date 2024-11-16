import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../api'
import type { IProfileState } from './types'

interface IProfileStore {
  isAuth: Ref<boolean>
  profile: Ref<any>
  state: Ref<IProfileState>
  getMyProfile: () => Promise<boolean>
}

const namespace = 'profile'

export const useProfileStore = defineStore(namespace, (): IProfileStore => {
  const isAuth = ref<boolean>(false)
  const profile = ref({})
  const THEME_KEY = 'theme'

  const getStoredTheme = () => localStorage.getItem(THEME_KEY) || 'system'

  const state = ref<IProfileState>({
    settings: {
      phone: {
        countries: [],
        code: '+993',
        number: '63747155'
      },
      security: {
        isSecurity: false
      },
      languages: [
        { id: 1, name: 'English', active: true },
        { id: 2, name: 'Russian', active: false },
        { id: 3, name: 'Turkmen', active: false },
        { id: 4, name: 'Turkish', active: false },
        { id: 5, name: 'Chinese', active: false }
      ],
      themes: [
        { id: 6, name: 'Системная', mode: 'system', active: getStoredTheme() === 'system' },
        { id: 7, name: 'Темная', mode: 'dark', active: getStoredTheme() === 'dark' },
        { id: 8, name: 'Светлая', mode: 'light', active: getStoredTheme() === 'light' }
      ]
    }
  })

  const isAuthenticated = computed(() => isAuth.value)

  async function getMyProfile(): Promise<boolean> {
    try {
      const { data } = await api.getMyProfile()

      if (data.error) {
        return false
      }
      isAuth.value = true
      profile.value = data

      return true
    } catch (error) {
      console.error('Error fetching profile:', error)
      return false
    }
  }

  return {
    isAuth: isAuthenticated,
    profile,
    getMyProfile,
    state
  }
})
