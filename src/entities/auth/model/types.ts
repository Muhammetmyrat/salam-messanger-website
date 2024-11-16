export interface IDevice {
  country_code: number | string
  device: {
    model: string
    name: string
    system: string
    system_version: string
    uniq_key: string
  }
  fcm_token: string
  phone_number: number | string
}

export interface IRegistrationForm {
  avatar: string | File
  nickname: string
  firebase_token: string
}

export interface IUpdateProfileForm {
  avatar: string | File
  username: string
  gender_type: string
  about_me: string
  birthday: string
}
