import * as Dayjs from 'dayjs'

export function formatDate (date: Date, format: string = 'DD/MM/YYYY hh:mm') {
  return date ? Dayjs(date).format(format) : ''
}
