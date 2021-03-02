import filesize from 'filesize'

export function getReadableSize(size: number) {
  const sizeFormatter = filesize.partial({ round: 0 })
  return sizeFormatter(size)
}
