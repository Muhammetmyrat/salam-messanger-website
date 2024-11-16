import { request } from '@/shared/api'

const BASE_AUTH_URL = import.meta.env.VITE_APP_BASE_AUTH_URL
const BASE_WRITE_URL = import.meta.env.VITE_APP_BASE_WRITE_URL

const MUSIC_URL = '/api/music/client/main-page/v1'
const MUSIC_BLOCK_URL = '/api/music/client/main-page/v1'

export const api = {
  getMusic,
  getMusicBlock
} as const


async function getMusic() {
  try {
    return await request({
      baseUrl: BASE_AUTH_URL,
      method: 'GET',
      url: MUSIC_URL,
    })
  } catch (e) {
    return {
      data: {
        error: true
      }
    }
  }
}

async function getMusicBlock(id: number) {
  try {
    return await request({
      baseUrl: BASE_AUTH_URL,
      method: 'GET',
      url: MUSIC_URL,
    })
  } catch (e) {
    return {
      data: {
        error: true
      }
    }
  }
}
