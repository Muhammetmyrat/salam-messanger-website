import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'

import { api } from '../api'
import { IDevice, IRegistrationForm, IUpdateProfileForm } from './types'
import { updateStep } from './update'

interface IAuthStore {
  authStep: Ref<number>
  device: Ref<IDevice>
  user: Ref<any>
  sendSms: (device: IDevice) => Promise<any>
  verifySms: (code: number) => Promise<any>
  registration: (form: IRegistrationForm) => Promise<any>
  updateProfile: (form: IUpdateProfileForm) => Promise<any>
}

const namespace = 'auth'

export const useAuthStore = defineStore(namespace, (): IAuthStore => {
  const authStep = ref(0)

  const device = ref<IDevice>({
    country_code: 0,
    device: {
      model: '',
      name: '',
      system: '',
      system_version: '',
      uniq_key: ''
    },
    fcm_token: '',
    phone_number: 0
  })

  const registrationToken = ref('')

  const user = ref({
    id: {},
    avatar_name: '',
    color_code: '',
    nickname: '',
    user_name: '',
    verified: true
  })

  async function sendSms(deviceForm: IDevice): Promise<any> {
    const { cookies } = useCookies()

    device.value = deviceForm
    const { data } = await api.sendSms(deviceForm)

    if (data.token) {
      registrationToken.value = data.token
      cookies.set('Authorization', data.token, 0)
      updateStep(1)
      return 'SUCCESS'
    }
    return 'ERROR'
  }

  async function verifySms(code: number) {
    const { cookies } = useCookies()

    const { data } = await api.verifySms({ code: code })

    if (data.user) {
      cookies.set('Authorization', data.token, 60 * 60 * 24 * 365)
      user.value = data.user
      return 'AUTHORIZED'
    }

    if (data?.user_id === 0) {
      registrationToken.value = data.token
      cookies.set('Authorization', data.token, 0)

      updateStep(2)
    }
    return 'NEXT_STEP'
  }

  async function registration(registrationForm: IRegistrationForm) {
    const { cookies } = useCookies()

    const { data } = await api.registration(registrationForm)

    if (data.error) {
      return false
    }

    registrationToken.value = data.token
    cookies.set('Authorization', data.token, 60 * 60 * 24 * 365)
    user.value = data.user
    updateStep(3)

    return data
  }

  async function updateProfile(form: any) {
    await api.updateProfile(form)

    return 'UPDATED'
  }

  return {
    authStep,
    device,
    user,
    sendSms,
    verifySms,
    registration,
    updateProfile
  }
})
