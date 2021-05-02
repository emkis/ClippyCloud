import { nanoid } from 'nanoid'

export function generateUniqueId(idLength = 8) {
  return nanoid(idLength)
}
