import { request } from '@/shared/api'
import { IDevice, IRegistrationForm } from '../model/types'

const BASE_AUTH_URL = import.meta.env.VITE_APP_BASE_AUTH_URL
const BASE_WRITE_URL = import.meta.env.VITE_APP_BASE_WRITE_URL

const SEND_SMS_URL = '/api/code/v1'
const VERIFY_SMS_URL = '/api/verify/v1'
const REGISTRATION_URL = '/api/register/v1'
const UPDATE_PROFILE_URL = '/api/write/update-details/v1'

export const api = {
  sendSms,
  verifySms,
  registration,
  updateProfile
} as const

async function sendSms(data: IDevice) {
  try {
    return await request({
      baseUrl: BASE_AUTH_URL,
      method: 'POST',
      url: SEND_SMS_URL,
      data: data
    })
  } catch (error: any) {
    return {
      data: {
        error: true
      }
    }
  }
}

async function verifySms(data: any) {
  try {
    return await request({
      baseUrl: BASE_AUTH_URL,
      method: 'POST',
      url: VERIFY_SMS_URL,
      data: data
    })
  } catch (e) {
    return {
      data: {
        error: true
      }
    }
  }
}

async function registration(data: IRegistrationForm) {
  try {
    return await request({
      baseUrl: BASE_AUTH_URL,
      method: 'POST',
      url: REGISTRATION_URL,
      data: data,
      isFormData: true
    })
  } catch (e) {
    return {
      data: {
        error: true
      }
    }
  }
}

async function updateProfile(data: IRegistrationForm) {
  try {
    return await request({
      baseUrl: BASE_WRITE_URL,
      method: 'POST',
      url: UPDATE_PROFILE_URL,
      data: data,
      isFormData: true
    })
  } catch (e) {
    return {
      data: {
        error: true
      }
    }
  }
}
