import axios from 'axios'
import JSONbig from 'json-bigint'
import { useCookies } from 'vue3-cookies'

import { Request } from './types'

const axiosInstance = axios.create({
  transformResponse: [
    (data) => {
      try {
        return JSONbig.parse(data)
      } catch (error) {
        return data
      }
    }
  ]
})

export const request = async ({
  baseUrl,
  url,
  method = 'POST',
  headers = {},
  params = {},
  data = {},
  onUploadProgress = {},
  isFormData = false
}: Request) => {
  const { cookies } = useCookies()
  if (isFormData) {
    const formData = new FormData()
    headers['Accept'] = 'application/json'
    headers['Content-Type'] = 'multipart/form-data'

    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }

    data = formData
  }

  if (cookies.get('Authorization')) {
    headers['Authorization'] = cookies.get('Authorization')
  }

  const response = await axiosInstance({
    url: `${baseUrl}${url}`,
    method,
    headers,
    ...onUploadProgress,
    params,
    data
  })

  return response
}
