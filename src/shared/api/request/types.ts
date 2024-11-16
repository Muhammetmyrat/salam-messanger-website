export interface Request {
  baseUrl?: string | undefined | null
  url: string
  method: string
  headers?: any
  params?: object
  data?: object
  onUploadProgress?: any
  isFormData?: boolean
}
