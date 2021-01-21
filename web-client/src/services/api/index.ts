import axios from 'axios'
import { environment } from '@/configs/environment'

export const ApiService = axios.create({
  baseURL: environment.apiUrl,
})
