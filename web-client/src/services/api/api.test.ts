import axios from 'axios'

import { createApiService } from './index'
import { environment } from '@/configs/environment'

describe('ApiService', () => {
  beforeEach(jest.clearAllMocks)

  it('should create service with expected options', () => {
    jest.spyOn(axios, 'create')
    createApiService()

    expect(axios.create).toBeCalledTimes(1)
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: expect.stringMatching(environment.apiUrl),
    })
  })
})
