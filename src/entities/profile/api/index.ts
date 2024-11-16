import { request } from '@/shared/api'

const BASE_READ_URL = import.meta.env.VITE_APP_BASE_READ_URL

const PROFILE_DATA_URL = '/api/read/profile-data/v1'

export const api = {
  getMyProfile
} as const

async function getMyProfile() {
  try {
    return await request({
      baseUrl: BASE_READ_URL,
      method: 'GET',
      url: `${PROFILE_DATA_URL}/${0}`
    })
  } catch (error: any) {
    return {
      data: {
        error: true
      }
    }
  }
}
