import { array, number, object, string } from 'superstruct'

export const STORAGE_KEY = 'stored-files'

export const storedCustomFileSchema = array(
  object({
    id: string(),
    createdAt: string(),
    name: string(),
    size: number(),
    url: string(),
    extension: string(),
  })
)
