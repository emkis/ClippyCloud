import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import addMinutes from 'date-fns/addMinutes'
import isPast from 'date-fns/isPast'

export function isFileExpired(fileCreationDate: string) {
  const creationDate = new Date(fileCreationDate)
  const expireDate = addMinutes(creationDate, 30)

  return isPast(expireDate)
}

export function getTimeToExpire(fileCreationDate: string) {
  const creationDate = new Date(fileCreationDate)
  const expireDate = addMinutes(creationDate, 30)
  const timeToExpire = formatDistanceToNow(expireDate)

  return timeToExpire
}
