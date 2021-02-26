import { environment } from './environment'

describe('Environment Variables', () => {
  it('should return expected properties', () => {
    expect(environment).toEqual({
      apiUrl: expect.any(String),
      appTitle: expect.any(String),
      appUrl: expect.any(String),
    })
  })
})
