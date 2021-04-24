import axios from 'axios'
import { environment } from '@/configs/environment'

export function createApiService() {
  return axios.create({
    baseURL: environment.apiUrl,
  })
}

export const ApiService = createApiService()
