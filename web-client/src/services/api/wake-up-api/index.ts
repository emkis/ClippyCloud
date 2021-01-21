import { AxiosResponse } from 'axios'
import { ApiService } from '../index'

interface IWakeUpApi {
  init(): Promise<AxiosResponse>
}

export const createWakeUpApiService = (
  httpClient = ApiService
): IWakeUpApi => ({
  init() {
    return httpClient.get('wake-up')
  },
})

export const WakeUpApi = createWakeUpApiService()
