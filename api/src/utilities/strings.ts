import { nanoid } from 'nanoid'

export function generateUniqueId (idLength = 10) {
  return nanoid(idLength)
}
