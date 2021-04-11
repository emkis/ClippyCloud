import { v4 as uuid } from 'uuid'

export function generateUniqueId() {
  return uuid()
}
